import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { colors } from './colorscheme';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

  
export const styles = StyleSheet.create({
    text: {
        color: colors.text,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: colors.button,
    }
  });