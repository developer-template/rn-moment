import moment from 'moment';
import React, {useRef, useState} from 'react';

const useCurrentTimer = () => {
  const timer = useRef<number>(0);
  const [time, setTime] = useState(moment());

  const start = () => {
    timer.current = setInterval(() => {
      setTime(moment());
    }, 10);
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  const currentTimeFormat = (_currentTime: moment.Moment) => {
    const TIME_FORMAT = 'HH:mm:ss.SS';
    return _currentTime.format(TIME_FORMAT);
  };

  return {
    time: currentTimeFormat(time),
    start,
    stop,
  };
};

export default useCurrentTimer;
