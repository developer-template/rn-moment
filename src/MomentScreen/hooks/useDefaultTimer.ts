import moment from 'moment';
import React, {useRef, useState} from 'react';

const useDefaultTimer = () => {
  const limit = 30;
  const timer = useRef<number>(0);
  const [time, setTime] = useState(moment());
  const [startTime, setStartTime] = useState(moment());

  const _updateTime = () => {
    timer.current = setTimeout(() => {
      setTime(moment());
      _updateTime();
    }, 100);
  };

  const start = () => {
    setStartTime(moment());
    _updateTime();
  };

  const restart = () => {
    const duration = time.diff(startTime, 'millisecond');
    setStartTime(() => moment().add(-duration, 'millisecond'));
    setTime(() => moment());
    _updateTime();
  };

  const pause = () => {
    clearTimeout(timer.current);
  };

  const reset = () => {
    setStartTime(moment());
    setTime(moment());
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  const defaultTime = (seconds: number): string => {
    const TIME_FORMAT = 'HH:mm:ss';
    if (seconds < 0) {
      return '+' + moment.utc(-1 * seconds * 1000).format(TIME_FORMAT);
    } else {
      return moment.utc(seconds * 1000).format(TIME_FORMAT);
    }
  };

  return {
    time: defaultTime(limit - time.diff(startTime, 'second')),
    start,
    restart,
    pause,
    reset,
    stop,
  };
};

export default useDefaultTimer;
