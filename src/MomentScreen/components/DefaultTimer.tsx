import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useDefaultTimer from '../hooks/useDefaultTimer';

interface Props {}

const DefaultTimer = ({}: Props) => {
  const styles = useStyles();
  const defaultTimer = useDefaultTimer();

  useEffect(() => {
    defaultTimer.start();
    return () => {
      defaultTimer.stop();
    };
  }, []);

  return (
    <View>
      <Text style={styles.time}>{defaultTimer.time}</Text>
    </View>
  );
};

export default DefaultTimer;

const useStyles = () =>
  StyleSheet.create({
    container: {},
    time: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
