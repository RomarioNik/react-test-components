import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Form = styled.form`
  display: flex;
  padding: 20px 0;
`;

export const Input = styled.input`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  border-right: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
`;

export const IconSearch = styled(ImSearch)`
  fill: #8a8a8a;
`;
