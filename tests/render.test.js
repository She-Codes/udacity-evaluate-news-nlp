import { resetApp } from '../src/client/js/render';

describe('resetApp', () => {
  test('it should clear the form inputs', () => {
    document.body.innerHTML = `
      <form></form>
      <div id="text"></div>
      <div id="results">
          <div id="sentiment">
              <p>Sentiment:</p>
              <p id="sentiment-wrapper" class="wrapper"></p>
          </div>
          <div id="confidence">
              <p>Confidence:</p>
              <p id="confidence-wrapper" class="wrapper"></p>
          </div>
      </div>
    `;
    const textWrapper = document.getElementById('text');
    const sentimentWrapper = document.getElementById(
      'sentiment-wrapper'
    );
    const confidenceWrapper = document.getElementById(
      'confidence-wrapper'
    );
    const form = document.querySelector('form');
    resetApp({
      textWrapper,
      sentimentWrapper,
      confidenceWrapper,
      form
    });
    expect(textWrapper.innerHTML).toBeFalsy();
    expect(sentimentWrapper.innerHTML).toBeFalsy();
    expect(confidenceWrapper.innerHTML).toBeFalsy();
  });
});
