import axios from 'axios';
import config from '../../../config.js';

const getRequest = (endpoint, method, params) =>
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpoint}`, {
    headers: config,
    method: method,
    params: params,
  });

const postRequest = (endpoint, params) =>
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpoint}`, {
    headers: config,
    method: 'POST',
    data: params,
  });

const request = {

  getProductRequest: (productID) => getRequest('qa/questions', 'GET', { product_id: productID }),

  getProductInfo: (productID) => getRequest(`products/${productID}`, 'GET'),

  putRequest: (questionID, helpfulOrReport) => getRequest(`qa/questions/${questionID}/${helpfulOrReport}/`, 'PUT'),

  postQuestionRequest: (productID, formInfo) => {
    console.log('form is: ', formInfo);
    console.log('product ID is ', productID);
    const form = {
      body: formInfo[0].value,
      name: formInfo[1].value,
      email: formInfo[2].value,
      product_id: productID,
    };
    console.log('form to submit is ', form);
    return postRequest('qa/questions/', form);
    // return axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
    //   headers: config,
    //   method: 'POST',
    //   data: {
    //     body: formInfo[0].value,
    //     name: formInfo[1].value,
    //     email: formInfo[2].value,
    //     product_id: productID,
    //   },
    // });
  },

  postAnswerRequest: (questionID, formInfo) => {
    const form = {
      'body': formInfo[0].value,
      'name': formInfo[1].value,
      'email': formInfo[2].value,
    };
    return postRequest(`qa/questions/${questionID}/answers`, form);
  },

  postInteractionRequest: (elementClicked, widgetClicked, timeStamp) => {
    const form = {
      element: elementClicked,
      widget: widgetClicked,
      time: timeStamp,
    };
    return postRequest('interactions', 'POST', form);
  },

};

export default request;
