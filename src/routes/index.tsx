import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme} from 'react-native';

import {useAuth} from '@hooks';
import {authRoutes, RootStackParamList, unAuthRoutes} from './routes';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  const {isAuth} = useAuth();
  const isDarkMode = useColorScheme() === 'dark';
  const appRoutes = isAuth ? authRoutes : unAuthRoutes;
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerStyle: {backgroundColor: '#17062a'},
    presentation: 'card',
    animation: 'slide_from_right',
    animationDuration: 200,
  };

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar
        backgroundColor={isDarkMode ? '#17062a' : '#f3f2f8'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <Stack.Navigator
        initialRouteName={isAuth ? 'Home' : 'Login'}
        screenOptions={screenOptions}>
        {appRoutes?.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
