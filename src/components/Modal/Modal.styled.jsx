import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* visibility: hidden; */
  /* transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out; */
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 3px 10px -0.5px rgba(0, 0, 0, 0.2);
  /* opacity: 0;
  visibility: hidden; */
  transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
`;

export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
  background-color: red;
  cursor: pointer;
`;
