import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardComponent from './CardComponent';

const data = [
  { title: 'Income', description: '$23450' },
  { title: 'Transactions', description: '56' },
  { title: 'Items', description: '247' },
  { title: 'Cost', description: '$3488' },
];

export default function SummaryComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Summary</Text>

      {/* Row 1 */}
      <View style={styles.row}>
        <View style={styles.cardWrapper}>
          <CardComponent title={data[0].title} description={data[0].description} iconName="money" />
        </View>
        <View style={styles.cardWrapper}>
          <CardComponent title={data[1].title} description={data[1].description} iconName="exchange"/>
        </View>
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <View style={styles.cardWrapper}>
          <CardComponent title={data[2].title} description={data[2].description} iconName="archive" />
        </View>
        <View style={styles.cardWrapper}>
          <CardComponent title={data[3].title} description={data[3].description} iconName="credit-card" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#193052ff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardWrapper: {
    flex: 1,
    aspectRatio: 2,
  },
});
