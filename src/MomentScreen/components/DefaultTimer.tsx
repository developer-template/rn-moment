import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useDefaultTimer from '../hooks/useDefaultTimer';

interface Props {}

const CurrentTimer = ({}: Props) => {
  const styles = useStyles();
  const defaultTimer = useDefaultTimer();
  const [timerState, setTimerState] = useState<'ready' | 'paused' | 'started'>(
    'ready',
  );

  const handleStart = () => {
    setTimerState('started');
    if (timerState === 'ready') {
      defaultTimer.start();
    } else {
      defaultTimer.restart();
    }
  };

  const handlePause = () => {
    setTimerState('paused');
    defaultTimer.stop();
  };

  const handleReset = () => {
    setTimerState('ready');
    defaultTimer.reset();
  };

  return (
    <View>
      <Text style={styles.time}>{defaultTimer.time}</Text>
      <View>
        {['ready', 'paused'].includes(timerState) && (
          <TouchableOpacity onPress={handleStart}>
            <Text>시작</Text>
          </TouchableOpacity>
        )}
        {['started'].includes(timerState) && (
          <TouchableOpacity onPress={handlePause}>
            <Text>중지</Text>
          </TouchableOpacity>
        )}
        {['paused'].includes(timerState) && (
          <TouchableOpacity onPress={handleReset}>
            <Text>리셋</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CurrentTimer;

const useStyles = () =>
  StyleSheet.create({
    container: {},
    time: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
