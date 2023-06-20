import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useStopwatchTimer from '../hooks/useStopwatchTimer';
import moment from 'moment';

interface Props {}

const StopwatchTimer = ({}: Props) => {
  const styles = useStyles();
  const stopwatchTimer = useStopwatchTimer();

  return (
    <View>
      <Text style={styles.time}>{stopwatchTimer.time}</Text>
      <TouchableOpacity onPress={stopwatchTimer.start} activeOpacity={1}>
        <Text>시작</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopwatchTimer.save} activeOpacity={1}>
        <Text>기록</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopwatchTimer.stop} activeOpacity={1}>
        <Text>중지</Text>
      </TouchableOpacity>
      <View>
        {stopwatchTimer.recordList.map((record, i) => (
          <Text key={i}>{moment.utc(record).format('HH:mm:ss.SS')}</Text>
        ))}
      </View>
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
