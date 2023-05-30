import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Statistic = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.p``;
export const Finished = styled.p``;

export const ListTodo = styled.ul`
  list-style: none;
`;

export const ItemTodo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
