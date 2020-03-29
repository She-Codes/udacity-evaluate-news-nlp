//import { checkForName } from './js/nameChecker';
//import { handleSubmit } from './js/formHandler';
import getArticleAnalysis from './js/analyze';
import { form, resetApp, renderResults } from './js/view';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/results.scss';

const handleSubmit = async e => {
  e.preventDefault();
  const url = form.url.value;
  let articleAnalysis;

  resetApp();

  if (url) {
    articleAnalysis = await getArticleAnalysis(url);
    renderResults(articleAnalysis.data);
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
