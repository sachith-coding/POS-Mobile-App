// components/MainAction/MainActionComponent.jsx
import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function MainActionComponent({ onNewOrder, onAddItem }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onNewOrder}>
        <Text style={styles.label}>New Order</Text>
      </Pressable>
      <View style={{ width: 12 }} />
      <Pressable style={styles.button} onPress={onAddItem}>
        <Text style={styles.label}>Add Item</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginVertical: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(88, 101, 242, 0.08)',
    borderColor: '#5865F2',
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});
