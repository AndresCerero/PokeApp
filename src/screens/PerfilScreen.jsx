import {View,StyleSheet} from 'react-native';
import React from 'react';
import LoginForm from '../components/Auth/loginForm';
import UserData from '../components/Auth/userData';
import useAuth from '../hooks/useAuth';

export default function PerfilScreen() {
  const {auth} = useAuth();

  return (
  <View style={styles.containerScreenForm}>
    {auth 
    ? <UserData /> 
    : <LoginForm />}
  </View>);
}


const styles = StyleSheet.create({
  containerScreenForm: {
    flex: 1,
    justifyContent: 'center',
  },
});
