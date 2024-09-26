/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-gesture-handler';
import type {NewsletterProps} from './types/index.td';

//

const Newsletter = ({
  title = 'Suscribete',
  placeholder = 'Placeholder',
  buttonlabel = 'Boton',
  successMessage = 'Registro Exitoso',
  retryButtonLabel = 'Volver',
  email,
  success,
  emailList = [],
  handleRetry,
  handleSubmit,
  setEmail,
}: NewsletterProps) => {
  return (
    <GestureHandlerRootView>
      {!success ? (
        <View>
          <Text>{title}</Text>
          <TextInput
            placeholder={placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Button title={buttonlabel} onPress={handleSubmit} />
        </View>
      ) : (
        <View>
          <Text>{successMessage}</Text>
          <Button title={retryButtonLabel} onPress={handleRetry} />
        </View>
      )}
      <View>
        <Text>Subscribe Emails</Text>
        {emailList.map((emailname, index) => (
          <Text key={index}>{emailname}</Text>
        ))}
      </View>
    </GestureHandlerRootView>
  );
};

export default Newsletter;
