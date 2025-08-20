import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderBar from './components/HeaderBar/HeaderBarComponent';
import SummaryCardNew from './components/SummaryBar/SummaryCardComponentNew';
import MainActionComponent from './components/MainActionBar/MainActionComponent';
import AvailableStocks from './components/StocksBar/AvailableStocks';
import AddItemScreen from './Screens/MainActionComponentThrough/AddItemScreen';
import NewOrderScreen from './Screens/MainActionComponentThrough/NewOrderScreen';
import { LanguageProvider } from './shared/laguageContext';

import { initDB } from './Database/database';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
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
        <MainActionComponent
          onNewOrder={() => navigation.navigate('NewOrder')}
          onAddItem={() => navigation.navigate('AddItem')}
        />
        <SummaryCardNew />
        <AvailableStocks />
      </SafeAreaView>

    </View>
  );
}

export default function App() {

    useEffect(() => {
    initDB(); // create table at startup
  }, []);

  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: 'Add Item' }} />
          <Stack.Screen name="NewOrder" component={NewOrderScreen} options={{ title: 'New Order' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
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
