import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {userID, userDetails} from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

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
      login(userDetails);
      setLoginError('');
    } else {
      setLoginError('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.containerForm}>
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        }}
        style={styles.imageForm}
      />
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
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.BtnForm}>
        <Text style={styles.BtnTextForm}>Entrar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#202426',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 16,
    color: 'white',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 16,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  error: {
    textAlign: 'center',
    color: '#F14B3D',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  imageForm: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 200,
  },
  BtnForm: {
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
  BtnTextForm: {
    color: '#202426', // Color del texto
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginForm;
