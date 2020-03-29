import getArticleAnalysis from '../src/client/js/analyze';

const url =
  'https://www.npr.org/sections/goatsandsoda/2020/03/29/822642383/opinion-an-appeal-to-youth-to-face-coronavirus-with-self-sacrifice-not-selfishne';

describe('getArticleAnalysis', () => {
  test('it should return a result from the Aylien API', async () => {
    const response = await getArticleAnalysis(url);
    const data = response.data;
    //console.log(data);
    expect(data).toEqual(
      expect.objectContaining({
        polarity: expect.any(String)
      })
    );
  });
});
