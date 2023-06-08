import React from 'react';
import {StyleSheet, View} from 'react-native';
import MomentScreen from './src/MomentScreen';

interface Props {}

const App = ({}: Props) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <MomentScreen />
    </View>
  );
};

export default App;

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
