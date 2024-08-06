import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BasicScreen } from '../screens/Basic/BasicScreen';
import { LoggedInScreen } from '../screens/LoggedIn/LoggedInScreen';

export type RootStackParamList = {
  Basic: undefined;
  LoggedIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Basic"
        component={BasicScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoggedIn"
        component={LoggedInScreen}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
