import moment from 'moment';
import React, {useRef, useState} from 'react';

const useStopwatchTimer = () => {
  const timer = useRef<number>(-1);
  const [time, setTime] = useState(moment());
  const [recordList, setRecordList] = useState<number[]>([]);

  const startTime = useRef(moment());
  const start = () => {
    startTime.current = moment();
    if (timer.current === -1) {
      timer.current = setInterval(() => {
        setTime(moment());
      }, 10);
    }
  };

  const save = () => {
    setRecordList([
      ...recordList,
      time.diff(startTime.current, 'milliseconds'),
    ]);
  };

  const stop = () => {
    clearInterval(timer.current);
    timer.current = -1;
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
    save,
    recordList,
  };
};

export default useStopwatchTimer;
