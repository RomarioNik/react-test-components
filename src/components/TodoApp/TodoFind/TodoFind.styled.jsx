import styled from 'styled-components';
import { Button } from '../Todo/Todo.styled';

export const FormFind = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const InputFind = styled.input`
  width: 100%;
  padding: 5px 0 5px 5px;
  border: 1px solid #ccc;
  border-radius: 8px 0 0 8px;
  outline: none;
`;

export const ButtonFind = styled(Button)`
  border-left: none;
  border-radius: 0 8px 8px 0;

  &:hover {
    box-shadow: none;
  }

  & svg {
    display: block;
    width: 0.8em;
    height: 0.8em;
    fill: #7a7a7a;
  }
`;
