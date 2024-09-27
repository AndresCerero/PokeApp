import {useState} from 'react';
import {Alert} from 'react-native';
import type {UseNewsletterSubscribeProps} from './types';

// Expresión regular para validar el correo electrónico
const emailRegex = /^[\w.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const useNewsletter = (): UseNewsletterSubscribeProps => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [emailList, setEmaillist] = useState<string[]>([]); // Inicializa como array vacío;

  const handleSubmit = () => {
    if (email === '') {
      Alert.alert('Error', 'Email cannot be empty');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }

    const response = simulatePostRequest(email);
    if (response.status === 200) {
      setSuccess(true);
    } else {
      Alert.alert('Error', 'Suscription failed');
    }
  };

  const simulatePostRequest = (newEmail:string) => {
    setEmaillist([...emailList, newEmail]);
    return {
      status: 200,
      message: 'Email added succesfully',
    };
  };

  const handleRetry = () => {
    setSuccess(false);
    setEmail('');
  };

  return {
    email,
    success,
    emailList,
    setEmail,
    handleSubmit,
    handleRetry,
  };
};

export default useNewsletter;
