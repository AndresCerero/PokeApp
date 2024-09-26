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
import {useNavigation} from '@react-navigation/native';
import usePokemonListFavorite from './usePokeListFavorite';
import Logout from '../Logout/Logout';

export default function PokeListFavorite() {
  const {pokemonData, loading, error, auth, items} = usePokemonListFavorite();
  const navigation = useNavigation();

  return !auth ? (
    <Logout />
  ) : (
    <View>
      {loading ? (
        <View>
          <Text>loading</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : items.length === 0 ? ( // Verifica si no hay favoritos
        <View>
          <Text>
            No tienes Pokémon favoritos. Agrega algunos a tus favoritos.
          </Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={pokemonData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Pressable
                style={styles.card}
                onPress={() => {
                  navigation.navigate('ScreenPokemon', {item});
                }}>
                <View
                  style={[
                    styles.containerCard,
                    {backgroundColor: item.typeColor},
                  ]}>
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTextId}>{item.id}</Text>
                    <Text style={styles.cardTextName}>{item.name}</Text>
                  </View>
                  <View style={styles.cardImgContainer}>
                    <Image source={{uri: item.image}} style={styles.cardImg} />
                  </View>
                </View>
              </Pressable>
            )}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.containerStyle}
            onEndReachedThreshold={0.5}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
    height: 120,
    margin: 10,
    borderRadius: 10,
  },
  containerCard: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardTextContainer: {
    paddingLeft: 10,
    width: '60%',
  },
  cardTextId: {
    color: '#FFFFFF80',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardTextName: {
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  cardImgContainer: {
    position: 'absolute',
    right: -40,
  },
  cardImg: {
    width: 140,
    height: 140,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
