import {View, Text, FlatList,StyleSheet} from 'react-native';
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
    <View>
      <Text>{props[0].stat.name}</Text>
      <FlatList
        data={statsArray}
        keyExtractor={item => item.stat.name}
        renderItem={({item}) => {
          const baseStat = item.base_stat;
          const percentage = (baseStat / MAX_STAT) * 100; // Normaliza el valor a un rango del 0 al 100

          return (
            <View style={styles.statContainer}>
              <Text style={styles.statText}>
                {item.stat.name}: {baseStat}
              </Text>

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
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

// Estilos para las barras y el contenedor
const styles = StyleSheet.create({
  statContainer: {
    marginVertical: 10,
  },
  statText: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundBar: {
    width: '100%',
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Barra opaca de fondo
    borderRadius: 10,
    overflow: 'hidden',
  },
  filledBar: {
    height: '100%',
    borderRadius: 10,
  },
});

export default PokemonStats;
