import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

export default function NewOrderScreen() {
  const itemsList = [
    { key: 1, label: 'Apple' },
    { key: 2, label: 'Banana' },
    { key: 3, label: 'Orange' },
  ];

  const [orderItems, setOrderItems] = useState([{ item: null, quantity: 0 }]);
  const scrollViewRef = useRef(null);

  // Add new row at top and scroll to top
  const addMoreItem = () => {
    setOrderItems(prev => [{ item: null, quantity: 0 }, ...prev]);
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }, 50);
  };

  const updateQuantity = (index, delta) => {
    setOrderItems(prev =>
      prev.map((row, i) =>
        i === index ? { ...row, quantity: Math.max(0, row.quantity + delta) } : row
      )
    );
  };

  const updateItem = (index, selectedItem) => {
    setOrderItems(prev =>
      prev.map((row, i) => (i === index ? { ...row, item: selectedItem } : row))
    );
  };

  const removeRow = (index) => {
    setOrderItems(prev => prev.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    console.log('Order:', orderItems);
    // Later: save to SQLite
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>New Order</Text>

        <ScrollView style={styles.scrollArea} ref={scrollViewRef}>
          {orderItems.map((row, index) => (
            <View key={index} style={styles.row}>
              
              <Pressable
                style={styles.deleteButton}
                onPress={() => removeRow(index)}
              >
                <Text style={styles.deleteButtonText}>×</Text>
              </Pressable>

              <ModalSelector
                data={itemsList}
                initValue={row.item || 'Select Item'}
                style={styles.selector}
                onChange={option => updateItem(index, option.label)}
              />

              <Pressable
                style={styles.qtyButton}
                onPress={() => updateQuantity(index, -1)}
              >
                <Text style={styles.qtyButtonText}>-</Text>
              </Pressable>

              <Text style={styles.qtyText}>{row.quantity}</Text>

              <Pressable
                style={styles.qtyButton}
                onPress={() => updateQuantity(index, 1)}
              >
                <Text style={styles.qtyButtonText}>+</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        <Pressable style={styles.moreButton} onPress={addMoreItem}>
          <Text style={styles.moreButtonText}>More Item</Text>
        </Pressable>

        <Pressable style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FAFBFC' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    flex: 0.5
  },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  scrollArea: { maxHeight: 310, marginBottom: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  selector: { flex: 1, height: 40 },
  qtyButton: {
    width: 32,
    height: 32,
    backgroundColor: '#5865F2',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  qtyText: { width: 24, textAlign: 'center', fontSize: 16 },
  deleteButton: {
    width: 32,
    height: 32,
    backgroundColor: '#F25C54',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  deleteButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  moreButton: {
    paddingVertical: 10,
    backgroundColor: '#F2C94C',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  moreButtonText: { fontSize: 16, fontWeight: '600', color: '#000' },
  placeOrderButton: {
    paddingVertical: 14,
    backgroundColor: '#27AE60',
    borderRadius: 8,
    alignItems: 'center',
  },
  placeOrderText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});

