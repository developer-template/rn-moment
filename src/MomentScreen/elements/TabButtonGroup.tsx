import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children?: React.ReactNode;
}

const TabButtonGroup = ({children}: Props) => {
  const styles = useStyles();
  return <View style={styles.container}>{children}</View>;
};

export default TabButtonGroup;

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderRadius: 100,
      overflow: 'hidden',
    },
  });
