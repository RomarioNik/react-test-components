import styled, { keyframes } from 'styled-components';
import { ImSpinner9 } from 'react-icons/im';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const IconSpin = keyframes`
0% {
transform: rotate(0deg);
}

100% {
    transform: rotate(360deg);
}
`;

export const SpinerIcon = styled(ImSpinner9)`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  transform: rotate(360deg);
  animation: ${IconSpin} 1000ms linear infinite;
`;

export const PokemonName = styled.span`
  position: absolute;
  top: 50%;
  left: 12%;
  font-size: 24px;
  font-weight: 600;
`;
