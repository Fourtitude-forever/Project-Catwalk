import styled from 'styled-components';

/////////////////////////////////////////
// STYLES FOR SECTIONS //
/////////////////////////////////////////

export const SectionBG1 = styled.div`
  margin: 20px 0;
  padding: 40px 40px;
  background-color: white;
`;

export const SectionBG2 = styled(SectionBG1)`
  background-color: none;
`;

/////////////////////////////////////////
// STYLES FOR HEADERS //
/////////////////////////////////////////

export const Headers2 = styled.h2`
  color: #276678;
`;

/////////////////////////////////////////
// STYLES FOR THREADS //
/////////////////////////////////////////

export const ThreadHeading = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  margin-bottom: 0;
`;

export const ThreadSubHeading = styled.p`
  font-size: 0.75em;
  color: #314e52;
  margin-top: 4px;
`;

export const ThreadSubList = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  max-height: 50vh;
  overflow: auto;
`;

export const ThreadSubItem = styled.p`
  font-size: 0.8em;
`;

/////////////////////////////////////////
// STYLES FOR BUTTONS //
/////////////////////////////////////////

export const Button = styled.button`
  border: 0;
  background-color: #1687a7;
  color: white;
  padding: 8px 13px;
  border-radius: 16px;
  outline: none;
  margin-right: 25px;
`;

export const SmallButton = styled(Button)`
  width: 25px;
  height: 25px;
  padding: 1px;
  border-radius: 50%;
`;

export const HiddenButton = styled(Button)`
  visibility: hidden;
`;

/////////////////////////////////////////
// STYLES FOR INPUTS //
/////////////////////////////////////////

export const SingleLineInput = styled.input`
  width: 150px;
  height: 25px;
  margin-right: 25px;
  padding-left: 10px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
`;
