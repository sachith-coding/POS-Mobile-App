import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Modern icon set

export default function SettingsComponent({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Ionicons name="settings-sharp" size={28} color="#5865F2" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: 2,
  },
});
