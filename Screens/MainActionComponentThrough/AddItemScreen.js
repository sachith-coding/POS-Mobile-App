import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { insertItem } from '../../Database/database';

export default function AddItemScreen({navigation}) {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [units, setUnits] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAdd = async () => {

      if (!itemName || !price || !units) {
        alert('Please fill in Item Name, Price, and Units');
        return;
      }

      try {
        await insertItem({
          name: itemName,
          description,
          price: parseFloat(price),
          units: parseInt(units),
          image, // local URI from gallery
        });

        alert('Item added successfully ✅');
        handleClear();
        navigation.navigate('Home');
      } 
      catch (error) {
          console.log('Error adding item:', error);
          alert('Failed to add item');
      }

      console.log({ itemName, description, price, units, image });
      // Later: Save to SQLite
  };

  const handleClear = () => {
    setItemName('');
    setDescription('');
    setPrice('');
    setUnits('');
    setImage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Add New Item</Text>

        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />

        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Item Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Item Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="No. of Units"
          value={units}
          onChangeText={setUnits}
          keyboardType="numeric"
        />

        <Pressable style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={{ color: '#555' }}>Pick an Image</Text>
          )}
        </Pressable>

        <View style={styles.buttonRow}>
          <Pressable style={[styles.button, styles.addButton]} onPress={handleAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear Data</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  multiline: {
    height: 80,
    textAlignVertical: 'top',
  },
  imagePicker: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fafafa',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButton: {
    paddingVertical: 14,
    backgroundColor: '#27AE60',
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButton: {
    paddingVertical: 14,
    backgroundColor: '#c95252ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0e0c0cff',
    fontSize: 16,
    fontWeight: '600',
  },
});
