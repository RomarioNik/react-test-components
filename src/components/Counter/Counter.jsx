import { useReducer } from 'react';
import { Wrapper, Number, ButtonCounter, ButtonWraper } from './Counter.styled';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - action.payload;

    default:
      throw new Error(`Unsaported action type ${action.type}`);
  }
};

export const Counter = ({ initialValue }) => {
  const [value, dispatch] = useReducer(countReducer, initialValue);

  const hancleIncrement = () => {
    dispatch({ type: 'increment', payload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement', payload: 1 });
  };

  return (
    <Wrapper>
      <Number>{value}</Number>
      <ButtonWraper>
        <ButtonCounter type="button" onClick={hancleIncrement}>
          Increase +1
        </ButtonCounter>
        <ButtonCounter type="button" onClick={handleDecrement}>
          Decrease -1
        </ButtonCounter>
      </ButtonWraper>
    </Wrapper>
  );
};
