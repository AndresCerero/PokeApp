import {View} from 'react-native';
import React from 'react';
import LoginForm from '../components/Auth/loginForm';
import UserData from '../components/Auth/userData';
import useAuth from '../hooks/useAuth';

export default function PerfilScreen() {
  const {auth} = useAuth();
  console.log(auth);

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
