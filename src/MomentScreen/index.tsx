import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useCurrentTimer from './hooks/useCurrentTimer';
import TabButton from './elements/TabButton';
import TabButtonGroup from './elements/TabButtonGroup';
import useDefaultTimer from './hooks/useDefaultTimer';
import CurrentTimer from './components/CurrentTimer';
import DefaultTimer from './components/DefaultTimer';
import StopwatchTimer from './components/StopwatchTimer';

interface Props {}

const MomentScreen = ({}: Props) => {
  const styles = useStyles();
  const [viewIndex, setViewIndex] = useState<number>(0);

  // const stopwatchTimer = useCurrentTimer();
  // const pomoTimer = useCurrentTimer();

  // useEffect(() => {
  //   defaultTimer.start();
  //   return () => {
  //     defaultTimer.stop();
  //   };
  // }, []);

  const pomoTimeFormat = (second: number): string => {
    const TIME_FORMAT = 'HH:mm:ss';
    return moment.utc(second * 1000).format(TIME_FORMAT);
  };

  return (
    <View style={styles.container}>
      <TabButtonGroup>
        {['현재시간', '타이머', '스톱워치', '포모'].map((name, i) => (
          <TabButton
            key={i}
            selected={viewIndex === i}
            onPress={() => setViewIndex(i)}>
            {name}
          </TabButton>
        ))}
      </TabButtonGroup>
      {viewIndex === 0 && <CurrentTimer />}
      {viewIndex === 1 && <DefaultTimer />}
      {viewIndex === 2 && <StopwatchTimer />}
      {/* {viewIndex === 1 && (
        <View>
          <Text style={styles.time}>
            {defaultTimer.time.format('HH:mm:ss')}
          </Text>
        </View>
      )}
      {viewIndex === 2 && (
        <View>
          <Text style={styles.time}>{pomoTimeFormat(22)}</Text>
        </View>
      )}
      {viewIndex === 3 && (
        <View>
          <Text style={styles.time}>{pomoTimeFormat(22)}</Text>
        </View>
      )} */}
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
