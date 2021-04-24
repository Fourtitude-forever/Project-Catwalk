import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import headers from '../../../../../../config.js';

const StylesDiv = styled.div`
  border: 5px solid yellow;
  position: relative;
  height:33%;
  display:flex;
  flex-direction: column;
`;

const CirclesContainer = styled.div`
  border: 5px solid orange;
  position: relative;
  height:40%;
  display:flex;
`

const Circles = styled.div`
   border-radius:50%;
   border:1px solid grey;
   height:50px;
   width:50px;
   margin:5px
`

const StyleTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`

const SelectedStyleTitle = styled.span`
  font-size: 18px;
  text-transform: uppercase;
`


function Styles() {
  return (
    <StylesDiv>
      <StyleTitle>
        Style >
        <SelectedStyleTitle>
          Selected Style
        </SelectedStyleTitle>
      </StyleTitle>

      <CirclesContainer>
        <Circles> </Circles>
        <Circles> </Circles>
        <Circles> </Circles>
        <Circles> </Circles>
      </CirclesContainer>
      <CirclesContainer>
        <Circles> </Circles>
        <Circles> </Circles>
        <Circles> </Circles>
        <Circles> </Circles>
      </CirclesContainer>
    </StylesDiv>
  );
}

export default Styles;