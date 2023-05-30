import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  color: ${({ show }) => show};
  border: 1px solid ${({ show }) => show};
  border-radius: 4px;
`;

export const ContentWrapper = styled.div`
  display: ${({ show }) => show};
`;
