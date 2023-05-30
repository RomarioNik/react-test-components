import styled from 'styled-components';
import { Button } from '../Todo/Todo.styled';

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const TodoTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  resize: none;
`;

export const EddTodoButton = styled(Button)`
  width: 100%;
  padding: 5px 0;
`;
