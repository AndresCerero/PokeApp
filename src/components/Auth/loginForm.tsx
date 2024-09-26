import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {userID, userDetails} from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';
import SearchPokemon from '../SearchPokemon/searchPokemon';

const LoginForm = () => {
  const [loginError, setLoginError] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {login} = useAuth();

  const onSubmit = data => {
    if (
      data.username === userID.username &&
      data.password === userID.password
    ) {
      console.log('Login exitoso:', data);
      login(userDetails);
      setLoginError('');
    } else {
      console.log('Credenciales incorrectas');
      setLoginError('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Iniciar sesión</Text>
        <Controller
          control={control}
          rules={{
            required: 'Nombre de usuario es obligatorio',
            minLength: {
              value: 4,
              message: 'El nombre de usuario debe tener al menos 4 caracteres',
            },
          }}
          name="username"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Nombre de usuario"
              style={styles.input}
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.username && (
          <Text style={styles.error}>{errors.username.message}</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: 'Contraseña es obligatoria',
            minLength: {
              value: 4,
              message: 'La contraseña debe tener al menos 4 caracteres',
            },
          }}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Contraseña"
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
        {loginError !== '' && <Text style={styles.error}>{loginError}</Text>}
        <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
      </View>
      <SearchPokemon />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
  searchContainer: {
    flex: 1,
  },
});

export default LoginForm;
