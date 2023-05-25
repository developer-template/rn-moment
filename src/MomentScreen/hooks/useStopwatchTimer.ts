import moment from 'moment';
import React, {useRef, useState} from 'react';

const useStopwatchTimer = () => {
  const timer = useRef<number>(0);
  const [time, setTime] = useState(moment());

  const startTime = useRef(moment());
  const start = () => {
    startTime.current = moment();
    timer.current = setInterval(() => {
      setTime(moment());
    }, 10);
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  const stopwatchTimeFormat = (_currentTime: moment.Moment) => {
    const TIME_FORMAT = 'HH:mm:ss.SS';
    return _currentTime.format(TIME_FORMAT);
  };

  return {
    time: stopwatchTimeFormat(
      moment.utc(time.diff(startTime.current, 'milliseconds')),
    ),
    start,
    stop,
  };
};

export default useStopwatchTimer;
