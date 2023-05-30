import { useState, useEffect, useRef } from 'react';
import { ClockStyle } from './Clock.styled';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);

    return () => stop();
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <ClockStyle>{time.toLocaleTimeString()}</ClockStyle>
      <button onClick={stop}>Stop time</button>
    </>
  );
};
