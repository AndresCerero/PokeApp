import {Text, FlatList, StyleSheet, Pressable, View, Image} from 'react-native';
import React from 'react';

export default function PokeList({pokemonList, navigation}) {
  return (
    <View style={styles.containerPokeList}>
      <FlatList
        data={pokemonList}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Pressable
            style={styles.pokemonItemContainer}
            onPress={() => {
              navigation.navigate('ScreenPokemon', {item});
            }}>
            <Image source={{uri: item.image}} style={styles.cardImg} />
            <Text style={styles.pokemonItem}>{item.name}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPokeList: {
    width: '100%',
  },
  pokemonItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginVertical: 6,
    borderWidth: 0.4,
    borderColor: '#34383C',
    borderRadius: 50,
  },
  pokemonItem: {
    fontSize: 14,
    color: 'white',
    textTransform: 'capitalize',
  },
  listContainer: {},
  cardImg: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
});
