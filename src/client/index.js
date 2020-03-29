//import { checkForName } from './js/nameChecker';
//import { handleSubmit } from './js/formHandler';
import getArticleAnalysis from './js/analyze';
import { resetApp, renderResults } from './js/render';
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

const handleSubmit = async e => {
  e.preventDefault();
  const url = form.url.value;
  let articleAnalysis;

  // clear rendered output and any error message
  resetApp({
    textWrapper,
    sentimentWrapper,
    confidenceWrapper,
    form
  });

  // if the user entered a URL, get the results from the Aylien API and render them
  if (url) {
    articleAnalysis = await getArticleAnalysis(url);
    renderResults(articleAnalysis.data, {
      textWrapper,
      sentimentWrapper,
      confidenceWrapper
    });
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
