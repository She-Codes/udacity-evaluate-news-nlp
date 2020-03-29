const resetApp = ({
  textWrapper,
  sentimentWrapper,
  confidenceWrapper,
  form
}) => {
  const error = document.getElementById('error');

  if (error) form.removeChild(error);
  textWrapper.innerHTML = '';
  sentimentWrapper.innerHTML = '';
  confidenceWrapper.innerHTML = '';
};

const renderResults = (data, elementsObj) => {
  const { polarity, text, polarity_confidence: confidence } = data;
  const {
    textWrapper,
    sentimentWrapper,
    confidenceWrapper
  } = elementsObj;

  textWrapper.innerHTML = text;
  sentimentWrapper.innerHTML = polarity;
  confidenceWrapper.innerHTML = `${Math.floor(confidence * 100)}%`;
};

export { resetApp, renderResults };
