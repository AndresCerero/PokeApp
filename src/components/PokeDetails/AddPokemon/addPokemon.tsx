import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {addItem, deleteItem} from '../utils/fetchAddfavorite';
import {AuthContext} from '../../../context/authContext';

const AddPokemon = props => {
  const {addFavorite, isFavorited, removeFavorite} = useContext(AuthContext);
  const {id} = props;

  const handlePress = async () => {
    if (!isFavorited(id)) {
      await addItem(id);
      addFavorite(id);
    } else {
      await deleteItem(id); // Llama a la función para eliminar el Pokémon de favoritos
      removeFavorite(id); // Actualiza el contexto
    }
  };

  return (
    <Icon
      name={isFavorited(id) ? 'heart' : 'heart-outline'}
      color="#fff"
      size={40}
      onPress={handlePress}
    />
  );
};

export default AddPokemon;
