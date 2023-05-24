import moment from 'moment';
import React, {useCallback, useRef, useState} from 'react';

const useTimer = () => {
  const timer = useRef<number>(0);
  const [time, setTime] = useState(moment());

  const updateTime = useCallback((_time: moment.Moment) => {
    timer.current = setTimeout(() => {
      setTime(_time.add(1, 'second'));
      updateTime(_time.add(1, 'second'));
    }, 1000);
  }, []);

  const start = () => {
    updateTime(moment());
  };

  const stop = () => {
    clearTimeout(timer.current);
  };

  return {
    time,
    start,
    stop,
  };
};

export default useTimer;
