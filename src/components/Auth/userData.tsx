import React, {useState, useCallback} from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import {getItems} from '../PokeDetails/utils/fetchAddfavorite';
import Icon from 'react-native-vector-icons/Ionicons';

const UserData = () => {
  const [total, setTotal] = useState();
  const {auth, logOut} = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getItems();
          setTotal(response.length);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, []),
  );

  return (
    <View style={styles.contentUserData}>
      <View style={styles.titleBlockUserData}>
        <Text style={styles.title}>Bienvenido,</Text>
        <View style={styles.ImgPerfilUserData}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            }}
            style={styles.imageUserData}
          />
          <Text
            style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
        </View>
      </View>

      <View style={styles.dataContent}>
        <View style={styles.dataContentItem}>
          <Icon name="person-outline" color="#202426" size={20} />
          <ItemMenu
            title="Nombre"
            text={`${auth.firstName} ${auth.lastName}`}
          />
        </View>
        <View style={styles.dataContentItem}>
          <Icon name="search-outline" color="#202426" size={20} />
          <ItemMenu title="Username" text={auth.username} />
        </View>
        <View style={styles.dataContentItem}>
          <Icon name="mail-outline" color="#202426" size={20} />
          <ItemMenu title="Email" text={auth.email} />
        </View>
        <View style={styles.dataContentItem}>
          <Icon name="heart-outline" color="#202426" size={20} />
          <ItemMenu title="Total Favoritos" text={`${total} pokemons`} />
        </View>
      </View>

      <Pressable onPress={logOut} style={styles.btnLogoun}>
        <Text style={styles.btnTextLogoun}>Desconectarse</Text>
      </Pressable>
    </View>
  );
};

function ItemMenu(props) {
  const {title, text} = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContentItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  contentUserData: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
    justifyContent: 'center',
  },
  titleBlockUserData: {
    marginBottom: 30,
  },
  title: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#202426',
  },
  ImgPerfilUserData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageUserData: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 20,
  },
  dataContent: {
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    // Sombra en Android
    elevation: 3,
    // Sombra en iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 20,
    width: 140,
    color: '#202426',
  },
  btnLogoun: {
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
  btnTextLogoun: {
    color: '#202426', // Color del texto
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserData;
