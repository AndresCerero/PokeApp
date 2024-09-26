import {
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React from 'react';

// Función para manejar la acción de loguear el nombre
const hola = name => {
  console.log(name);
};

export default function PokeList({pokemonList, loading}) {
  console.log('Valores de pokemonList:', pokemonList);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : pokemonList.length === 0 ? (
        <Text>No se encontraron resultados</Text>
      ) : (
        <FlatList
          data={pokemonList}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable onPress={() => hola(item.name)}>
              <Text style={styles.pokemonItem}>{item.name}</Text>
            </Pressable>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  pokemonItem: {
    fontSize: 18,
    marginVertical: 4,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16, // Espacio adicional en la parte inferior
  },
});
