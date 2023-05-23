import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useTimer from './useTimer';

interface Props {}

const MomentScreen = ({}: Props) => {
  const styles = useStyles();

  const currentTimer = useTimer();
  const defaultTimer = useTimer();
  const stopwatchTimer = useTimer();
  const pomoTimer = useTimer();

  // 기초
  // - 현재시간
  // - 스톱워치

  // 뽀모도로
  //

  useEffect(() => {
    currentTimer.start();
    return () => {
      currentTimer.stop();
    };
  }, [currentTimer]);

  const currentTimeFormat = (_currentTime: moment.Moment) => {
    const TIME_FORMAT = 'HH:mm:ss';
    return _currentTime.format(TIME_FORMAT);
  };

  const pomoTimeFormat = (second: number): string => {
    const TIME_FORMAT = 'HH:mm:ss';
    return moment.utc(second * 1000).format(TIME_FORMAT);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>현재시간</Text>
        <Text style={styles.time}>{currentTimeFormat(currentTimer.time)}</Text>
        <Text>{moment().format('LTS')}</Text>
      </View>
      <View>
        <Text>타이머</Text>
        <Text style={styles.time}>{pomoTimeFormat(22)}</Text>
      </View>
    </View>
  );
};

export default MomentScreen;

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    time: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
