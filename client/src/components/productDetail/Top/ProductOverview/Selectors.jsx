import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'underscore';

import {
  Headers2, Button
} from '../../../../css/sharedcss.jsx';

const SelectorDiv = styled.div`
  border: 5px solid yellow;
  position: relative;
  height:33%;
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
`;

const DropBtn = styled.select`
  border: 1px solid black;
  background: none;
  position: relative;
  display: inline-block;
  padding: 15px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
`;

function Selectors({ selectedStyle }) {
  const [selectSku, setSelectSku] = useState();
  const [skus, setSkus] = useState({});
  // const [selectSku, setSelectSku] = useState();
  // v

  function onSizeChange(sku) {
    setSelectSku(sku);
  }

  useEffect(() => {
    selectedStyle[0] ? setSkus(selectedStyle[0].skus) : console.log('neyney');
  }, []);

  return (
    <div>
      <SizeSelector selectedStyle={selectedStyle} onSizeChange={onSizeChange} />
      <QuantitySelector selectedStyle={selectedStyle} selectSku={selectSku} />
      <AddToBag />
    </div>
  );
}

function SizeSelector({ selectedStyle, onSizeChange }) {
  return (
    <form>
      <DropBtn onChange={(e) => onSizeChange(e.target.value)}>
        <option>Select Size</option>
        {
            selectedStyle[0] ? _.map(selectedStyle[0].skus, (sku, key) => (<option value={key}>{sku.size}</option>)) : console.log('nene')
          }
      </DropBtn>
    </form>
  );
}

function QuantitySelector({ selectedStyle, selectSku }) {
  function setQuantity(num) {
    const quantities = [];
    let i = 0;
    while (i < num) {
      quantities.push(i);
      i++;
    }
    return quantities;
  }

  return (
    <form>
      <DropBtn>
        <option>Quantity</option>
        {
          selectedStyle[0]
            ? setQuantity(selectedStyle[0]?.skus[selectSku]?.quantity).map((quantity) => <option>{quantity}</option>) : console.log('yabadaba')
        }
      </DropBtn>
    </form>
  );
}

function AddToBag() {
  const AddtoBagButton = styled.button`
    border: 1px solid black;
    background: none;
    position: relative;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    cursor: pointer;
    width: 200px;
    text-align: left;
  `;

  const Icon = styled.span`
  text-align: center;
  `;

  return (
    <AddtoBagButton>
      Add to bag
      <Icon><i className="fas fa-shopping-cart" /></Icon>
    </AddtoBagButton>
  );
}

export default Selectors;
