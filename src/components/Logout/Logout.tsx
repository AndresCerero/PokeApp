import {View, Text, Button, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Logout() {
  const navigation = useNavigation();

  return (
    <View style={styles.ContainerLogout}>
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        }}
        style={styles.imageLogout}
      />
      <Text style={styles.textLogout}>
        Para ver esta pantalla tienes que inicar sesión
      </Text>
      <Pressable
        onPress={() => navigation.navigate('Perfil')}
        style={styles.BtnLogout}>
        <Text style={styles.BtnTextLogout}>Ir al login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerLogout: {
    flex: 1,
    backgroundColor: '#202426',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  imageLogout: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 200,
  },
  textLogout: {
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
    fontSize: 24,
  },
  BtnLogout: {
    backgroundColor: '#FDD85D',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 50, // Bordes redondeados
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra en Android
    elevation: 3,
    // Sombra en iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  BtnTextLogout: {
    color: '#202426', // Color del texto
    fontSize: 18,
    fontWeight: 'bold',
  },
});
