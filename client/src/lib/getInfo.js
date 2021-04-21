import axios from 'axios';
import config from '../../../config.js';

const request = {

  getProductRequest: (productID) =>
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/', {
      headers: config,
      params: { product_id: productID },
    }),

  putRequest: (questionID, helpfulOrReport) =>
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}/${helpfulOrReport}/`, {
      headers: config,
    }),
};

export default request;
