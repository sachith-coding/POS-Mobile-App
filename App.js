import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HeaderBar from './components/HeaderBar/HeaderBarComponent';
import SummaryComponent from './components/SummaryBar/SummaryCardsComponent';
import MainActionComponent from './components/MainActionBar/MainActionComponent';
import SummaryCardNew from './components/SummaryBar/SummaryCardComponentNew';

export default function App() {

  const handleDatePress = () => {
    alert('DateFilter to be opened');
  };

  const handleSettingsPress = () => {
    alert('SettingsComponent to be opened');
  };

  return (
    <View style={styles.outerWrapper}>
      <SafeAreaView style={styles.container}>
        <HeaderBar onDatePress={handleDatePress} onSettingsPress={handleSettingsPress} />
        <MainActionComponent   onNewOrder={() => { /* navigate or open new order */ }} onAddItem={() => { /* open add item UI */ }} />
        <SummaryCardNew />
      </SafeAreaView>

      <View style={styles.verticalLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  container: {
    flex: 1,
  },
  verticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 1,
    backgroundColor: 'gray',
    zIndex: 999,
  }, 
});
