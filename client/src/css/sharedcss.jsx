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
  background-color: #f6f5f5;
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

export const ThreadBlock = styled.div`
  border-bottom: solid 1px black;
`;

export const ThreadHeading = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  margin-bottom: 0;
`;

export const ThreadSubHeading = styled.p`
  font-size: 0.75em;
  color: #314e52;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ThreadSubList = styled.div`
  margin-top: 0;
  margin-left: 25px;
  max-height: 50vh;
  overflow: auto;
  display: inline-block;
  width: 50%;
`;

export const ThreadSubItem = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

/////////////////////////////////////////
// STYLES FOR BUTTONS //
/////////////////////////////////////////

export const Button = styled.button`
  border: 0;
  background-color: #187690;
  color: white;
  padding: 8px 13px;
  border-radius: 16px;
  outline: none;
  margin-right: 25px;
  margin-top: 20px;
  &:hover {
    background-color: #94b5c0;
  }
`;

export const SmallButton = styled(Button)`
  width: 25px;
  height: 25px;
  padding: 1px;
  border-radius: 50%;
  margin-top: 0px;
`;

export const CloseButton = styled(SmallButton)`
  position: absolute;
  right: -25px;
  top: -12px;
  width: 35px;
  height: 35px;
`;

export const HiddenButton = styled(Button)`
  visibility: hidden;
`;

export const Icon = styled.i`
  margin-left: 25px;
  color: #B7B7B7;
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

/////////////////////////////////////////
// STYLES FOR MODALS //
/////////////////////////////////////////

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.35);
  & > div {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #d3e0ea;
    border-radius: 30px;
    padding: 2em;
    opacity: 1;
  }
`;

/////////////////////////////////////////
// STYLES FOR FORM //
/////////////////////////////////////////

export const Form = styled.form`
  input[type=text] {
    display: block;
    border: none;
    border-bottom: 2px solid #1687a7;
  }
  input[type=text]:focus {
    border: 2px solid #276678;
  }
`;

export const FormInput = styled(SingleLineInput)`
  width: 60%;
  height: 25px;
  margin-right: 25px;
  margin-bottom: 5px;
  padding-left: 10px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;
`;

export const FormError = styled(ThreadSubItem)`
  color: red;
`;

/////////////////////////////////////////
// STYLES FOR DIVIDER //
/////////////////////////////////////////

export const Divider = styled.div`
  border-bottom: 1px solid gray;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 40%;
`;