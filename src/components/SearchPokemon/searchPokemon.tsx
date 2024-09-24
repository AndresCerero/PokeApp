import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import useSearchPokemon from './useSearchPokemon';
import PokeList from './PokeList/PokeList';

export default function SearchPokemon() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [pokemonList, setPokemonList] = useState([]); // Estado para almacenar los Pokémon encontrados
  const [loading, setLoading] = useState(false); // Estado para gestionar la carga
  const {searchByName} = useSearchPokemon(); // Obtener la función de búsqueda

  useEffect(() => {
    const handleSearch = async () => {
      if (searchTerm.trim() === '') {
        setPokemonList([]); // Limpiar la lista si no hay término de búsqueda
        return;
      }

      setLoading(true);
      setPokemonList([]); // Limpiar la lista anterior antes de buscar
      try {
        const results = await searchByName(0, 20, searchTerm); // Llamar a la función de búsqueda
        //console.log('Resultados encontrados:', results); // Verificar los resultados
        setPokemonList(results); // Actualiza el estado con los resultados
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // Llamar a la función de búsqueda
    const timeoutId = setTimeout(handleSearch, 300); // Retraso de 300 ms

    return () => clearTimeout(timeoutId); // Limpiar timeout si el componente se desmonta o el término cambia
  }, [searchTerm]); // Efecto se ejecuta cuando searchTerm cambia

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon"
        value={searchTerm}
        onChangeText={setSearchTerm} // Actualiza el término de búsqueda
      />
      <PokeList pokemonList={pokemonList} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
});
