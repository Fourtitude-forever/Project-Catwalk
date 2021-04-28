import axios from 'axios';
import config from '../../../config.js';

const urlRequest = (endpoint, method, params) =>
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpoint}`, {
    headers: config,
    method: method,
    params: params,
  });

const request = {

  getProductRequest: (productID) => urlRequest('qa/questions', 'GET', { product_id: productID }),

  getProductInfo: (productID) => urlRequest(`products/${productID}`, 'GET'),

  putRequest: (questionID, helpfulOrReport) => urlRequest(`qa/questions/${questionID}/${helpfulOrReport}/`, 'PUT'),

  postQuestionRequest: (productID, formInfo) => {
    const form = `{"body": "${formInfo[12].value}", "name": "${formInfo[13].value}", "email": "${formInfo[14].value}", "product_id": ${productID}}`;
    console.log('form is: ', formInfo);
    // return urlRequest('qa/questions/', 'POST', form);
    return axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
      headers: config,
      method: 'POST',
      data: {
        body: formInfo[12].value,
        name: formInfo[13].value,
        email: formInfo[14].value,
        product_id: productID,
      },
    });
  },

  postAnswerRequest: (questionID, formInfo) => {
    const form = {
      'body': formInfo[0].value,
      'name': formInfo[1].value,
      'email': formInfo[2].value,
    };
    return urlRequest(`qa/questions/${questionID}/answers`, 'POST', form);
  },

  postInteractionRequest: (elementClicked, widgetClicked, timeStamp) => {
    const form = {
      element: elementClicked,
      widget: widgetClicked,
      time: timeStamp,
    };
    return urlRequest('interactions', 'POST', form);
  },

};

export default request;
