import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useCurrentTimer from '../hooks/useCurrentTimer';

interface Props {}

const CurrentTimer = ({}: Props) => {
  const styles = useStyles();
  const currentTimer = useCurrentTimer();

  useEffect(() => {
    currentTimer.start();
    return () => {
      currentTimer.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text style={styles.time}>{currentTimer.time}</Text>
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
