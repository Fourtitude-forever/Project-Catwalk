import React, { useState, useEffect} from 'react';
import styled from 'styled-components';


const SelectorDiv = styled.div`
  border: 5px solid yellow;
  position: relative;
  height:33%;
  display:flex;
  flex-direction: row;
  align-items: center;
  flex-wrap:wrap;
`;

const DropBtn = styled.button`
  border: 1px solid black;
  background: none;
  position: relative;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
  min-width: 100px;
  max-width: 200px;
`

// const DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
// `



function Selector() {
  return (
    <SelectorDiv>
      <div>
        <DropBtn>Select Size</DropBtn>
        <DropBtn>1</DropBtn>
      </div>
      <div>
        <DropBtn>Add to Bag</DropBtn>
        <DropBtn>Star</DropBtn>
      </div>
    </SelectorDiv>
  );
}




export default Selector