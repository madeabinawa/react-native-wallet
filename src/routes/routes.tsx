import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Analytics, Login} from '../screens';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Analytics: undefined;
};

const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Analytics" component={Analytics} />
    </Stack.Navigator>
  );
};

export default Routes;
