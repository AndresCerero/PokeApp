import AsyncStorage from '@react-native-async-storage/async-storage'; // Importación de AsyncStorage
import {STORAGE_KEY} from './ConstantStore'; // Asegúrate de que STORAGE_KEY esté exportado en ConstantStore

// Función para agregar un item
export const addItem = async item => {
  try {
    const existingItems = await AsyncStorage.getItem(STORAGE_KEY);
    const itemsArray = existingItems ? JSON.parse(existingItems) : [];
    itemsArray.push(item);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(itemsArray));
  } catch (error) {
    console.error('Failed to add item:', error);
  }
};

// Función para eliminar un item
export const deleteItem = async itemToRemove => {
  try {
    const existingItems = await AsyncStorage.getItem(STORAGE_KEY);
    const itemsArray = existingItems ? JSON.parse(existingItems) : [];
    const updatedItems = itemsArray.filter(item => item !== itemToRemove);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
  } catch (error) {
    console.error('Failed to delete item:', error);
  }
};

// Función para obtener todos los items
export const getItems = async () => {
  try {
    const storedItems = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedItems !== null) {
      const parsedItems = JSON.parse(storedItems);
      return parsedItems;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return [];
  }
};
