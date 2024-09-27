import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import usePokemonDetails from './usePokemonDetails';
import PokemonStats from './PokemonStats/pokemonStats';
import Loading from '../Loding/Loading';

const PokemonDetails = props => {
  const {pokemonData, loading, error} = usePokemonDetails(props);

  return (
    <SafeAreaView style={styles.containerPokeDetails}>
      {loading ? (
        <Loading />
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <View>
          <View
            style={[
              styles.HeaderBackground,
              {backgroundColor: pokemonData.typeColor},
            ]}
          />
          <View style={styles.HeaderPokemon}>
            <Text style={styles.NamePokemon}>{pokemonData.name}</Text>
            <View style={styles.ImgIDPokemon}>
              <Text style={styles.IdPokemon}>{pokemonData.id}</Text>
              <Image
                source={{uri: pokemonData.image}}
                style={styles.ImgPokemon}
              />
            </View>
          </View>
          <View style={styles.ContainerTypes}>
            {pokemonData.type.map((type, index) => (
              <View
                key={index}
                style={[styles.TypesColor, {backgroundColor: type.color}]}>
                <Text style={styles.TextTypesColor}>{type.name}</Text>
              </View>
            ))}
          </View>
          <View>
            <PokemonStats {...pokemonData.stats} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerPokeDetails: {
    backgroundColor: '#F8F9FA',
    height: '100%',
  },
  HeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{scaleX: 2}], // Solo en el fondo
    zIndex: -1, // Asegúrate de que esté detrás de otros elementos
    height: 300,
  },
  HeaderPokemon: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  NamePokemon: {
    fontSize: 42,
    color: 'white',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  ImgIDPokemon: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IdPokemon: {
    fontSize: 20,
    fontWeight: '800',
    color: 'rgba(255, 255, 255, 0.4)',
    position: 'absolute',
    zIndex: 0,
    right: 20,
    bottom: 60,
  },
  ImgPokemon: {
    width: 200,
    height: 200,
    zIndex: 1,
  },
  ContainerTypes: {
    paddingHorizontal: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  TypesColor: {
    width: 100,
    padding: 6,
    borderRadius: 20,
  },
  TextTypesColor: {
    textTransform: 'capitalize',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});

export default PokemonDetails;
