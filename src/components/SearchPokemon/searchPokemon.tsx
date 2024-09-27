import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useSearchPokemon from './useSearchPokemon';
import PokeList from './PokeList/PokeList';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchPokemon() {
  const {pokemonList, loading, setSearchTerm, searchTerm} = useSearchPokemon();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search-outline" color="#202426" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Buscar Pokémon"
          onChangeText={setSearchTerm}
          value={searchTerm} // Controlar el valor del input
        />
      </View>

      {loading ? (
        <View style={styles.LoadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.resultadosContainer}>
          {searchTerm === '' ? null : pokemonList.length === 0 ? (
            <Text>No se encontraron resultados</Text>
          ) : (
            <PokeList pokemonList={pokemonList} navigation={navigation} />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#202426',
    position: 'absolute',
    padding: 10,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: '#ddd',
    height: 40,
    overflow: 'hidden',
  },
  input: {
    paddingLeft: 14,
    backgroundColor: 'white',
    flex: 2,
  },
  LoadingContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  resultadosContainer: {
    flex: 1,
    width: '100%',
    //paddingTop: 10,
  },
});
