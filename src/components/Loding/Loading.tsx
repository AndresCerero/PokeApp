import {View, Text, StyleSheet, ActivityIndicator,Image} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={styles.containerLoading}>
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        }}
        style={styles.imageLoading}
      />
      <Text style={styles.textLoading}>Cargando...</Text>
      <ActivityIndicator
        size="large"
        color="#4CAF50"
        style={styles.indicatorLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  imageLoading: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textLoading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  indicatorLoading: {
    marginTop: 20,
  },
});
