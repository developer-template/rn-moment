import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';

const useStopwatchTimer = () => {
  const timer = useRef<number>(0);
  const [time, setTime] = useState(0);

  const updateTime = useCallback(() => {
    timer.current = setTimeout(() => {
      setTime(_time => _time + 100);
      updateTime();
    }, 100);
  }, []);

  const start = () => {
    updateTime();
  };

  const stop = () => {
    clearTimeout(timer.current);
  };

  const stopwatchTime = (millisecond: number): string => {
    const TIME_FORMAT = 'HH:mm:ss.SS';
    return moment.utc(millisecond).format(TIME_FORMAT);
  };

  return {
    time: stopwatchTime(time),
    start,
    stop,
  };
};

export default useStopwatchTimer;
