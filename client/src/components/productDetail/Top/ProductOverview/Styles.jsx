import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import {
  Headers2, Button
} from '../../../../css/sharedcss.jsx';

const StylesDiv = styled.div`
  position: relative;
  height:33%;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 10px;
`;

const CirclesContainer = styled.div`
  position: relative;
  height:50%;
  display:flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`

const Circles = styled.input`
   border-radius: 50%;
   border:1px solid grey;
   height:75%;
   width:15%;
   box-sizing: border-box;
   margin:10px;
   overflow: hidden;
   &:hover {
    box-shadow: 0 0 0 3px rgba(0, 140, 186, 0.5);
  };
   object-fit: cover;
`

const StyleTitle = styled.div`
  color: #187690;
  font-weight: bold;
  font-size: x-large;
  text-transform: uppercase;
`

const SelectedStyleTitle = styled.span`
  tab-size: 4;
  font-size: medium;
  text-transform: uppercase;
`


function Styles({ styles, id, onStyleChange }) {
  return (
    <StylesDiv>
      <StyleTitle>
          Style > &nbsp;
        <SelectedStyleTitle>
           Selected Style
        </SelectedStyleTitle>
      </StyleTitle>

      <CirclesContainer>
        {
          styles.map((style, index) => {
            return <Circles
                type="image"
                src={style.photos[0].thumbnail_url}
                onClick={() => onStyleChange(style.style_id)}
                key={index}
              />
          })
        }
      </CirclesContainer>
    </StylesDiv>
  );
}

export default Styles;