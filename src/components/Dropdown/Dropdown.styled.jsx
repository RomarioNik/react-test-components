import styled from 'styled-components';

export const Wraper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100px;
  margin-top: 20px;
  border: 2px solid #000;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px 5px;
  border: 1px solid #000000;
  border-radius: 7px;
`;

export const Menu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: green;
  list-style: none;
  box-sizing: border-box;
`;

export const MenuItem = styled.li`
  height: 20px;
  background-color: blue;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
