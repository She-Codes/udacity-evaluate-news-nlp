//import { checkForName } from './js/nameChecker';
//import { handleSubmit } from './js/formHandler';
import axios from 'axios';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';

const form = document.querySelector('form');
const baseRoute = 'http://localhost:3000/getsentiment';

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
  const error = document.getElementById('error');
  if (error) form.removeChild(error);
  const url = form.url.value;
  if (url) {
    const articleAnalysis = await getArticleAnalysis(url);
    console.log(articleAnalysis);
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
