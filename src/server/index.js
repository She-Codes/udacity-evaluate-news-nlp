var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const port = 3000;
const bodyParser = require('body-parser');
const aylienTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.static('dist'));

// Setup middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});

console.log(__dirname);
// Setup Aylien API
var textapi = new aylienTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get('/', function(req, res) {
  res.sendFile('dist/index.html');
});

app.post('/getsentiment', function(req, res) {
  textapi.sentiment(
    {
      mode: 'document',
      url: req.body.url
    },
    (error, textapiResponse) => {
      if (error === null) {
        res.send(textapiResponse);
      } else {
        res.send(error);
      }
    }
  );
});

app.get('/test', function(req, res) {
  res.send(mockAPIResponse);
});
