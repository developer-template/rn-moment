import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TabButton from './elements/TabButton';
import TabButtonGroup from './elements/TabButtonGroup';
// import CurrentTimer from './components/CurrentTimer';
import DefaultTimer from './components/DefaultTimer';
// import StopwatchTimer from './components/StopwatchTimer';

interface Props {}

const MomentScreen = ({}: Props) => {
  const styles = useStyles();
  const [viewIndex, setViewIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      <TabButtonGroup>
        {['현재시간', '타이머', '스톱워치'].map((name, i) => (
          <TabButton
            key={i}
            selected={viewIndex === i}
            onPress={() => setViewIndex(i)}>
            {name}
          </TabButton>
        ))}
      </TabButtonGroup>
      {/* {viewIndex === 0 && <CurrentTimer />} */}
      {viewIndex === 1 && <DefaultTimer />}
      {/* {viewIndex === 2 && <StopwatchTimer />} */}
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
