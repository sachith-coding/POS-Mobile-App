// components/MainAction/MainActionComponent.jsx
import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import CardComponent from './CardComponent';

const data = [
  { title: 'Income', description: '$23450' },
  { title: 'Transactions', description: '56' },
  { title: 'Items', description: '247' },
  { title: 'Cost', description: '$3488' },
];

export default function SummaryCardNew({ onNewOrder, onAddItem }) {
  return (

    <View style={styles.root}>
      <Text style={styles.heading}>Summary</Text>

      <View style={styles.container}>
        <View style={styles.button} onPress={onNewOrder}>
            <CardComponent title={data[0].title} description={data[0].description} iconName="money" />
        </View>
        <View style={[styles.button, styles.leftSpacing]} onPress={onAddItem}>
            <CardComponent title={data[1].title} description={data[1].description} iconName="exchange"/>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.button} onPress={onNewOrder}>
            <CardComponent title={data[2].title} description={data[2].description} iconName="archive" />
        </View>
        <View style={[styles.button, styles.leftSpacing]} onPress={onAddItem}>
            <CardComponent title={data[3].title} description={data[3].description} iconName="credit-card" />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 10
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginVertical: 2,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    aspectRatio: 2,
  },
  leftSpacing: {
    marginLeft: 16
  },
  heading: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 12,
    color: '#193052ff',
    paddingHorizontal: 20
  },
});
