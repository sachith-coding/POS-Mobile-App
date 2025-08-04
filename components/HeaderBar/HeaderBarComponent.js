// HeaderBar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateFilterComponent from './DateFilterComponent';
import SettingsComponent from './SettingsComponent';

export default function HeaderBar({ onDatePress, onSettingsPress }) {
  return (
    <View style={styles.header}>
      {/* 1st column */}
      <View style={styles.col1}>
        <Text style={styles.greeting}>Hi Sachi!</Text>
      </View>

      {/* 2nd column */}
      <View style={styles.col2}>
        <DateFilterComponent label="August - 03" onPress={onDatePress} />
      </View>

      {/* 3rd column */}
      <View style={styles.col3}>
        <SettingsComponent onPress={onSettingsPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: 
  {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF', // slightly lighter purple for header
    borderRadius: 12,
    margin: 10,
    marginTop: 40,
    elevation: 4, // Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
  },
  col1: {
    width: '35%',
  },
  col2: {
    width: '55%',
    alignItems: 'center',
  },
  col3: {
    width: '10%',
    alignItems: 'flex-end',
  },
  greeting: {
    color: '#2C3E50	',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // faded white
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  dateButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  settingsIcon: {
    fontSize: 24,
    color: 'white',
  },
});
