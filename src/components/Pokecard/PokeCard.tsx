import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {PokeCardProps} from './types';

const PokeCard = ({
  pokemonData,
  navigation,
  loadMorePokemon,
  loadingMore,
}: PokeCardProps) => {
  return (
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
              style={[styles.containerCard, {backgroundColor: item.typeColor}]}>
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
  );
};

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
    // Sombras para Android
    elevation: 5,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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

export default PokeCard;
