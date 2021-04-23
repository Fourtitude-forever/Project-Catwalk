import axios from 'axios';
import config from '../../../../config.js';

const request = {
  getProductInfo: (productID) => {
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}', {
      headers: config,
      method: 'GET',
      params: { product_id: productID },
    });
  },
};

export default request;
