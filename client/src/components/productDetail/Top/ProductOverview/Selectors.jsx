import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'underscore';
import {
  Headers2, Button,
} from '../../../../css/sharedcss.jsx';

const SelectorDiv = styled.div`
  position: relative;
  height:33%;
  display:flex;
  flex-wrap:wrap;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
`;

const DropBtn = styled.select`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  color: white;
  background-color: #187690;
  border-radius: 16px;
  outline: none;
  font-size: large;
  width: 80%;
  height: 60%;
  top:40%;
  display: inline-block;
  flex-basis: auto;
  text-indent: 10%;
  &:hover {
    background-color: #94b5c0;
  }
`;

const Form = styled.form`
  align-content: stretch;
  width:50%;
  height: 50%;
  box-sizing: border-box;
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  display: inline-block;
  padding:5px;
`;

function Selectors({ selectedStyle, onStarChange }) {
  const [selectSku, setSelectSku] = useState();
  const [skus, setSkus] = useState({});
  const loadingIcon = <p>Please wait...loading</p>;

  function onSizeChange(sku) {
    setSelectSku(sku);
  }

  useEffect(() => {
    selectedStyle[0] ? setSkus(selectedStyle[0].skus) : loadingIcon;
  }, []);

  return (
    <SelectorDiv>
      <SizeSelector selectedStyle={selectedStyle} onSizeChange={onSizeChange} />
      <QuantitySelector selectedStyle={selectedStyle} selectSku={selectSku} />
      <AddToBag />
      <Star selectedStyle={selectedStyle} onStarChange={onStarChange} />
    </SelectorDiv>
  );
}

function SizeSelector({ selectedStyle, onSizeChange }) {
  const [isloading, setLoading] = useState(false);

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }
  return (
    <Form>
      <DropBtn onChange={(e) => onSizeChange(e.target.value)}>
        <option>Select Size</option>
        {
            selectedStyle[0]
              ? _.map(selectedStyle[0].skus,
                (sku, key) => (
                  <option value={key} key={key}>
                    {sku.size}
                  </option>
                )) : loadingIcon
          }
      </DropBtn>
    </Form>
  );
}

function QuantitySelector({ selectedStyle, selectSku }) {
  const [isloading, setLoading] = useState(false);

  function setQuantity(num) {
    const quantities = [];
    let i = 1;
    while (i < num) {
      quantities.push(i);
      i++;
    }
    return quantities;
  }

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }

  return (
    <Form>
      <DropBtn>

        <option>Quantity</option>
        {
          selectedStyle[0]
            ? setQuantity(selectedStyle[0]?.skus[selectSku]?.quantity)
              .map((quantity, i) => <option key={i}>{quantity}</option>) : loadingIcon
        }
      </DropBtn>
    </Form>
  );
}

const Wrapper = styled.div`
  width :70%;
  align-content: stretch;
  height: 50%;
  box-sizing: border-box;
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  display: inline-block;
  padding:5px;
`;

const AddtoBagButton = styled.button`

    position: relative;
    text-indent: 10%;
    font-size: large;
    flex-basis: auto;
    color: white;
    border-radius: 16px;
    border: 0;
    outline: none;
    background-color: #187690;
    box-sizing: border-box;
    width: 90%;
    height: 60%;
    display: inline-block;
    cursor: pointer;
    text-align: left;
    &:hover {
      background-color: #94b5c0;
    }
  `;

function AddToBag() {
  return (
    <Wrapper>
      <AddtoBagButton>
        Add to bag
      </AddtoBagButton>
    </Wrapper>
  );
}

const StarWrapper = styled.div`
  width :30%;
  height: 50%;
  box-sizing: border-box;
  display:flex;
  flex-flow: row wrap;
  display: inline-block;
  padding:5px;
`;

const StarButton = styled.button`
  position: relative;
  flex-basis: auto;
  color: white;
  border-radius: 16px;
  text-align: center;
  border: 0;
  outline: none;
  background-color: #187690;
  display: inline-block;
  cursor: pointer;
  font-size: large;
  width:50%;
  height:60%;
  &:hover {
    background-color: #94b5c0;
  }
`;

function Star({ selectedStyle, onStarChange }) {
  return (
    <StarWrapper>
      <StarButton onClick={() => onStarChange(selectedStyle)}><i class="far fa-heart"></i></StarButton>
    </StarWrapper>
  );
}

export default Selectors;
