import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useStopwatchTimer from '../hooks/useStopwatchTimer';

interface Props {}

const StopwatchTimer = ({}: Props) => {
  const styles = useStyles();
  const stopwatchTimer = useStopwatchTimer();

  useEffect(() => {
    stopwatchTimer.start();
    return () => {
      stopwatchTimer.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text style={styles.time}>{stopwatchTimer.time}</Text>
    </View>
  );
};

export default StopwatchTimer;

const useStyles = () =>
  StyleSheet.create({
    container: {},
    time: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
