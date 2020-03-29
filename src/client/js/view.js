const form = document.querySelector('form');
const textWrapper = document.getElementById('text');
const sentimentWrapper = document.getElementById('sentiment-wrapper');
const confidenceWrapper = document.getElementById(
  'confidence-wrapper'
);

const resetApp = () => {
  const error = document.getElementById('error');

  if (error) form.removeChild(error);
  textWrapper.innerHTML = '';
  sentimentWrapper.innerHTML = '';
  confidenceWrapper.innerHTML = '';
};

const renderResults = data => {
  const { polarity, text, polarity_confidence: confidence } = data;

  textWrapper.innerHTML = text;
  sentimentWrapper.innerHTML = polarity;
  confidenceWrapper.innerHTML = `${Math.floor(confidence * 100)}%`;
};

export { form, resetApp, renderResults };
