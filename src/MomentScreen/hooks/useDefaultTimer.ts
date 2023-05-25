import moment from 'moment';
import React, {useRef, useState} from 'react';

const useDefaultTimer = () => {
  const limit = 30;
  const timer = useRef<number>(0);
  const [time, setTime] = useState(moment());

  const startTime = useRef(moment());
  const start = () => {
    startTime.current = moment();
    timer.current = setInterval(() => {
      setTime(moment());
    }, 1000);
  };

  const stop = () => {
    clearInterval(timer.current);
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
    time: defaultTime(limit - time.diff(startTime.current, 'seconds')),
    start,
    stop,
  };
};

export default useDefaultTimer;
