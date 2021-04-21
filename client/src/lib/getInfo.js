import axios from 'axios';
import config from '../../../config.js';

const request = {

  getProductInfo: (productID) => {
    console.log('hi there');
    return axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/', {
      headers: config,
      params: { product_id: productID },
    });
  },

};

export default request;
