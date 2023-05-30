import styled from 'styled-components';

export const ColorWraper = styled.div`
  margin-top: 20px;
  padding: 10px;
  width: 500px;
  border: 1px solid gray;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const ColorList = styled.div`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const ColorItem = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ bgcolor }) => bgcolor};
  cursor: pointer;
  transform: scale(${({ active }) => active});
  transition: transform 250ms linear;
`;
