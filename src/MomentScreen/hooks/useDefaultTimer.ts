import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';

const useDefaultTimer = () => {
  const limit = 30;
  const timer = useRef<number>(0);
  const [time, setTime] = useState(0);

  const updateTime = useCallback(() => {
    timer.current = setTimeout(() => {
      setTime(_time => _time + 1);
      updateTime();
    }, 1000);
  }, []);

  const start = () => {
    updateTime();
  };

  const stop = () => {
    clearTimeout(timer.current);
  };

  const defaultTime = (second: number): string => {
    const TIME_FORMAT = 'HH:mm:ss';
    if (second < 0) {
      return '+' + moment.utc(-1 * second * 1000).format(TIME_FORMAT);
    } else {
      return moment.utc(second * 1000).format(TIME_FORMAT);
    }
  };

  return {
    time: defaultTime(limit - time),
    start,
    stop,
  };
};

export default useDefaultTimer;
