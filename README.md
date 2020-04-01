# Udacity News Article Evaluation

The goal of this project is to implement the following:

- Webpack
- Express server
- Sass
- Webpack Loaders and Plugins
- Service workers
- Using APIs and creating requests to external urls

This project uses the Aylien API which allows you to use Natural Language Processing. NLPs leverage machine learning and deep learning to create a program that can interpret natural human speech. Copy the url of an article that you would like to analyze the sentiment of and paste it into the form in the browser. The app will return the sentiment of the article, the text of the article, and the confidence level of the analysis.

## Getting started

### You will need to signup for your own API key for the Aylien API

You can go [here](https://developer.aylien.com/signup).
Create a new `.env` file in the root of your project and add your key:

```
API_ID=************
API_KEY=***********
```

### Set up

- `yarn` to install packages
- `yarn start` to start your Express server
- `yarn build-prod` to bundle for production and generate the `dist` folder
- or
- `yarn build-dev` to run your webpack dev server
- With the Express server running, run `yarn test` to run tests

This project uses [nodemon](https://nodemon.io/) to run the Node server. If you do not have nodemon installed simply swap out `nodemon` for `node` in your `package.json` start script.

The Express server can be accessed in the browser at [http://localhost:3000](http://localhost:3000)
The Webpack dev server can be accessed in the browser at [http://localhost:8080](http://localhost:8080)
