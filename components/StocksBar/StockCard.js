import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function StockCard({ image, name, price, width }) {
  return (
    <View style={[styles.card, { width }]}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.infoRow}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 140,
    backgroundColor: '#e6f1e5ff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden', 
    margin: 6,
  },
  image: {
    width: '100%',
    height: (140 / 4) * 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 140 / 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c7',
  },
});
