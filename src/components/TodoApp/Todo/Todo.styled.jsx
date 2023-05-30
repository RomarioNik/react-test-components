import styled from 'styled-components';

export const TextWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const TodoTask = styled.p`
  text-decoration: ${({ copmleted }) => (copmleted ? 'line-through' : 'none')};
`;

export const TodoCheckbox = styled.input``;

export const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 200ms linear;

  &:hover {
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;
