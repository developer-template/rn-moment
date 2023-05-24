import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  children?: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
}

const TabButton = ({children, selected = false, onPress}: Props) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;

const useStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eee',
    },
    selectedContainer: {
      backgroundColor: '#fff',
    },
  });
