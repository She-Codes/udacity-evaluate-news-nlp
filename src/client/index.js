//import { checkForName } from './js/nameChecker';
//import { handleSubmit } from './js/formHandler';
import axios from 'axios';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/results.scss';

const form = document.querySelector('form');
const textWrapper = document.getElementById('text');
const sentimentWrapper = document.getElementById('sentiment-wrapper');
const confidenceWrapper = document.getElementById(
  'confidence-wrapper'
);
const baseRoute = 'http://localhost:3000/getsentiment';

const resetApp = () => {
  const error = document.getElementById('error');

  if (error) form.removeChild(error);
  textWrapper.innerHTML = '';
  sentimentWrapper.innerHTML = '';
  confidenceWrapper.innerHTML = '';
};

const renderArticleAnalysis = data => {
  const { polarity, text, polarity_confidence: confidence } = data;

  textWrapper.innerHTML = text;
  sentimentWrapper.innerHTML = polarity;
  confidenceWrapper.innerHTML = `${Math.floor(confidence * 100)}%`;
};

const getArticleAnalysis = async urlVal => {
  try {
    const response = await axios({
      method: 'post',
      url: baseRoute,
      data: { url: urlVal }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async e => {
  e.preventDefault();

  const url = form.url.value;

  resetApp();

  if (url) {
    const articleAnalysis = await getArticleAnalysis(url);
    console.log(articleAnalysis);
    renderArticleAnalysis(articleAnalysis.data);
  } else {
    form.insertAdjacentHTML(
      'afterbegin',
      '<p id="error">Please enter a url.</p>'
    );
  }
};

const setupEventListeners = () => {
  form.addEventListener('submit', handleSubmit);
};

const init = () => {
  setupEventListeners();
};

init();
