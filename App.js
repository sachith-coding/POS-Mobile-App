import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HeaderBar from './components/HeaderBar/HeaderBarComponent';
import SummaryComponent from './components/SummaryBar/SummaryCardsComponent';

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
        <SummaryComponent />
      </SafeAreaView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   outerWrapper: {
//     flex: 1,
//     backgroundColor: '#ddd', // light gray background outside phone
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     minHeight: '100vh',
//   },
//   container: {
//     flex: 1,
//     width: 375, // iPhone 8 width
//     height: 667, // iPhone 8 height
//     backgroundColor: '#FAFBFC', // purple background
//     borderRadius: 20,
//     overflow: 'hidden',
//     boxShadow: '0 0 15px rgba(0,0,0,0.3)',
//   },
// });

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  container: {
    flex: 1,
  },
});
