/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Analytics, Home, Login} from './src/screens';
import Contact from './src/screens/Contact';

const RootStack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar
        backgroundColor={isDarkMode ? '#17062a' : '#f3f2f8'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerStyle: {backgroundColor: '#17062a '},
        }}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Analytics" component={Analytics} />
        <RootStack.Screen name="Contacts" component={Contact} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
