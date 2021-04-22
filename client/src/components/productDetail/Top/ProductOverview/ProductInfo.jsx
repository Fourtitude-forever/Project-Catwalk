import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import headers from '../../../../../../config.js';

const ProductInfoDiv = styled.div`
  border: 5px solid yellow;
  position: relative;
  height:33%;
  display:flex;
  flex-direction: column;
  padding-left: 10px;
  padding-top:20px
`;

const Cat = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  padding-top:10px;
  padding-bottom:10px
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-bottom:10px;
`;

const Price = styled.div`
  font-size: 15px;
`;

function ProductInformation({ productID }) {
  const [isloading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState();
  //const [productOverview, setProductOverview] = useState('');

  useEffect(() => {
    setLoading(true);

    const config = {
      headers,
      params: { product_id: productID },
    };

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/23145', config)
      .then((list) => {
        console.log(list.data);
        setCategory(list.data.category);
        setTitle(list.data.name);
        setPrice(list.data.default_price);
        //setProductOverview(list.data.description);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }


  return (
    <ProductInfoDiv>
      <div>Stars placeholder</div>
      <div>{loadingIcon}</div>
      <Cat>{category}</Cat>
      <Title>{title}</Title>
      <div>{price}</div>
      {/* <div>Share on social media place holder</div> */}
    </ProductInfoDiv>
  );
}

export default ProductInformation