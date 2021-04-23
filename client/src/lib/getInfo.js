import axios from 'axios';
import config from '../../../config.js';

const request = {

  getProductRequest: (productID) =>
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/', {
      headers: config,
      params: { product_id: productID },
    }),

  getProductInfo: (productID) =>
    axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}`, {
      headers: config,
    }),

  putRequest: (questionID, helpfulOrReport) =>
    axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}/${helpfulOrReport}/`, {
      headers: config,
      method: 'PUT',
    }),

  postQuestionRequest: (productID, formInfo) =>
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/', {
      headers: config,
      method: 'POST',
      params: {
        body: formInfo[0].value,
        name: formInfo[1].value,
        email: formInfo[2].value,
        product_id: productID,
      },
    }),

  postAnswerRequest: (questionID, formInfo) =>
    axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}/answers`, {
      headers: config,
      method: 'POST',
      params: {
        body: formInfo[0].value,
        name: formInfo[1].value,
        email: formInfo[2].value,
      },
    }),

};

export default request;
