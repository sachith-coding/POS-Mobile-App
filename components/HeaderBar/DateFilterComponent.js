// DateFilterComponent.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function DateFilterComponent({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.row}>
        <FontAwesome name="calendar" size={16} color="#5865F2" style={styles.icon} />
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(88, 101, 242, 0.08)',
    borderColor: '#5865F2',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 6,
  },
  buttonText: {
    color: '#5865F2',
    fontWeight: '600',
    fontSize: 14,
  },
});


