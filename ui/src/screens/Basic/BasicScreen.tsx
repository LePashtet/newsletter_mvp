import React, { FC, useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useUserStore } from '../../store/UserStore';
import styles from './BasicScreenStyles';

type BasicScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Basic'
>;

interface BasicScreenProps {
  navigation: BasicScreenNavigationProp;
}

export const BasicScreen: FC<BasicScreenProps> = ({ navigation }) => {
  const { user, setUser } = useUserStore();
  const [email, setEmail] = useState<string | null>(user);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Email: {user}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        value={email ?? ''}
      />
      <Button title="Set User Email" onPress={() => setUser(email)} />
      <Button
        title="Go to Logged In Screen"
        onPress={() => navigation.navigate('LoggedIn')}
      />
    </View>
  );
};
