import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {usePokemon} from './usePokeListDetails';
import {useNavigation} from '@react-navigation/native';

const PokemonList = () => {
  const {pokemonData, loading, error, loadMorePokemon, loadingMore} =
    usePokemon();

  const navigation = useNavigation();

  const goToPokemon = item => {
    navigation.navigate('ScreenPokemon', {item});
  };

  return (
    <View>
      {loading ? (
        <View>
          <Text>Loading...</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={pokemonData}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable onPress={() => goToPokemon(item.id)}>
                <View style={{backgroundColor: item.typeColor}}>
                  <Text>{item.name}</Text>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 100, height: 100}}
                  />
                  <Text>{item.id}</Text>
                </View>
              </Pressable>
            )}
            //contentContainerStyle={}
            onEndReached={loadMorePokemon}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              loadingMore ? ( // Usar estado de prueba para mostrar el indicador
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  style={styles.spinner}
                />
              ) : null
            }
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
