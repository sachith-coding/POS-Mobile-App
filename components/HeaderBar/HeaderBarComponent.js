// HeaderBar.js
import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import DateFilterComponent from './DateFilterComponent';
import SettingsComponent from './SettingsComponent';
import { useTranslation } from '../../shared/laguageContext';

export default function HeaderBar({ onDatePress, onSettingsPress }) {

  const { language, setLanguage, t } = useTranslation();  // <<<< NEW

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'si' : 'en');
  };

  return (
    <View style={styles.header}>
      {/* 1st column */}
      <View style={styles.col1}>
        <Text>{t('greeting')}</Text> {/* <<<< NEW */}
      </View>

      {/* 2nd column */}
      <View style={styles.col2}>
        <DateFilterComponent label="August - 03" onPress={onDatePress} />
      </View>

      {/* 3rd column
      <View style={styles.col3}>
        <SettingsComponent onPress={onSettingsPress} />
      </View> */}

      {/* 4th column: language toggle button */}
      <View style={styles.col4}>
        <Pressable onPress={toggleLanguage} style={styles.langButton}>
          <Text style={styles.langButtonText}>
            {language === 'en' ? 'To සිංහල' : 'To English'}
          </Text>
        </Pressable>
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
    width: '30%',
  },
  col2: {
    width: '40%',
    alignItems: 'flex-end',
  },
  col3: {
    width: '10%',
    alignItems: 'flex-end',
  },
  col4: {            // <<<< NEW: for language toggle
    flex: 2,
    alignItems: 'flex-end',
    width: '30%'
  },
  langButton: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  langButtonText: {
    color: '#fff',
    fontWeight: '600',
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
