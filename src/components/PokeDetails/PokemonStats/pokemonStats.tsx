import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const PokemonStats = props => {
  const statsArray = Object.values(props);
  const MAX_STAT = 255;

  // Función para obtener el color según el valor de la estadística
  const getColor = value => {
    if (value < 30) {
      return 'red';
    } else if (value < 60) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.titleStats}>Base Stats</Text>
      <FlatList
        data={statsArray}
        keyExtractor={item => item.stat.name}
        contentContainerStyle={styles.flatListContentStyle}
        renderItem={({item}) => {
          const baseStat = item.base_stat;
          const percentage = (baseStat / MAX_STAT) * 100; // Normaliza el valor a un rango del 0 al 100

          return (
            <View style={styles.statContainer}>
              <Text style={styles.statText}>{item.stat.name}</Text>
              {/* Barra de fondo opaca */}
              <View style={styles.backgroundBar}>
                {/* Barra de color que cambia según el valor */}
                <View
                  style={[
                    styles.filledBar,
                    {
                      width: `${percentage}%`,
                      backgroundColor: getColor(percentage),
                    },
                  ]}
                />
                <Text style={[styles.statValue, {left: `${percentage - 5}%`}]}>
                  {baseStat}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
    padding: 20,
    height: 250,
  },
  titleStats: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  flatListContentStyle: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%',
    paddingVertical: 5,
  },
  statContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    textTransform: 'capitalize',
    width: '30%',
    textAlignVertical: 'center',
  },
  backgroundBar: {
    width: '70%',
    height: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filledBar: {
    height: '100%',
    borderRadius: 10,
  },
  statValue: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 4,
    elevation: 5,
  },
});

export default PokemonStats;
