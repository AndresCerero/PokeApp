import {View, Text, ActivityIndicator, Image} from 'react-native';
import React from 'react';
import usePokemonDetails from './usePokemonDetails';
import PokemonStats from './PokemonStats/pokemonStats';

const PokemonDetails = props => {
  const {pokemonData, loading, error} = usePokemonDetails(props);
  
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
          <Text>{pokemonData.name}</Text>
          <Image
            source={{uri: pokemonData.image}}
            style={{width: 100, height: 100}}
          />
          <View>
            {pokemonData.type.map((type, index) => (
              <View key={index}>
                <Text style={{color: type.color}}>{type.name}</Text>
              </View>
            ))}
            <Text>Type Color: {pokemonData.typeColor}</Text>
          </View>
          <PokemonStats {...pokemonData.stats}/>
        </View>
      )}
    </View>
  );
};

export default PokemonDetails;
