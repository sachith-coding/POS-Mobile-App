import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, TextInput } from 'react-native';
import StockCard from './StockCard';
import appleImage from '../../assets/Fruits/apple.png';
import bananaImage from '../../assets/Fruits/banana.png';
import orangeImage from '../../assets/Fruits/orange.png';
import grapesImage from '../../assets/Fruits/grapes.png';
import mangoImage from '../../assets/Fruits/mango.png'; 
import pineapppleImage from '../../assets/Fruits/pineapple.png';
import watermelonImage from '../../assets/Fruits/watermelon.png';

const screenWidth = Dimensions.get('window').width;
const horizontalPadding = 16; // 8 left + 8 right
const cardMarginHorizontal = 8; // 4 left + 4 right
const cardsPerRow = 3;

// Calculate card width
const baseCardWidth = (screenWidth - horizontalPadding - cardMarginHorizontal * cardsPerRow) / cardsPerRow;
const cardWidth = baseCardWidth - 0.5; // slightly smaller for spacing

// Card height from your StockCard.js (140 height)
const cardHeight = 140;
const rowSpacing = 38;

// Fixed container height (2 rows)
const containerHeight = cardHeight * 2 + rowSpacing;

export default function AvailableStocks() {
  const [searchText, setSearchText] = useState('');

  const stockData = [
    { id: 1, name: 'Apple', price: 2.5, image: appleImage },
    { id: 2, name: 'Banana', price: 1.2, image: bananaImage },
    { id: 3, name: 'Orange', price: 1.8, image: orangeImage },
    { id: 4, name: 'Grapes', price: 3.0, image: grapesImage },
    { id: 5, name: 'Mango', price: 2.9, image: mangoImage },
    { id: 6, name: 'Pineapple', price: 4.0, image: pineapppleImage },
    { id: 7, name: 'Watermelon', price: 5.0, image: watermelonImage },
  ];

  // Filter stock items by search text (case-insensitive)
  const filteredStocks = stockData.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Heading and search bar */}
      <View style={styles.headingSearchRow}>
        <Text style={styles.heading}>Available Items</Text>

        <TextInput
          placeholder="Search items..."
          style={styles.searchBar}
          value={searchText}
          onChangeText={setSearchText}
          clearButtonMode="while-editing" // iOS clear button
        />
      </View>

      {/* Fixed height scroll container */}
      <View style={[styles.scrollContainer, { height: containerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
          <View style={styles.cardsWrapper}>
            {filteredStocks.length > 0 ? (
              filteredStocks.map(item => (
                <View key={item.id} style={[styles.cardWrapper, { width: cardWidth }]}>
                  <StockCard image={item.image} name={item.name} price={item.price} />
                </View>
              ))
            ) : (
              <Text style={styles.noResultsText}>No items found.</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalPadding / 2,
    marginTop: 1,
  },
  headingSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingRight: horizontalPadding / 2,
    marginLeft: horizontalPadding / 2 + cardMarginHorizontal / 2,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  searchBar: {
    height: 36,
    width: 160,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    // no horizontal padding here; handled by container
  },
  cardsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: containerHeight, // keep min height to avoid collapse on few items
  },
  cardWrapper: {
    marginHorizontal: cardMarginHorizontal / 2,
    marginBottom: 12,
  },
  noResultsText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#888',
  },
});

