import React, {useState, useEffect} from 'react';

import {Container, Minute, Second, Hour} from './styles';

import {TimerSeparator} from '../TimerSeparator';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [customInterval, setCustomInterval] = useState<NodeJS.Timer>();

  const handleStartCount = () => {
    setCustomInterval(
      setInterval(() => {
        changeSeconds();
      }, 1000),
    );
  };

  const handleStopCount = () => {};

  const changeSeconds = () => {
    setSeconds(prevSeconds => {
      if (prevSeconds + 1 == 60) {
        setMinutes(prevMinutes => {
          return prevMinutes + 1;
        });
        return 0;
      }
      return prevSeconds + 1;
    });
  };

//   setTimeout(() => {
//     handleStartCount();
//   }, 2000);

  return (
    <Container>
      <Hour>{`${hours <= 9 ? `0${hours}` : hours}`}</Hour>
      <TimerSeparator />
      <Minute>{`${minutes <= 9 ? `0${minutes}` : minutes}`}</Minute>
      <TimerSeparator />
      <Second>{`${seconds <= 9 ? `0${seconds}` : seconds}`}</Second>
    </Container>
  );
}
