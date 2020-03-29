import axios from 'axios';

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

export default getArticleAnalysis;
