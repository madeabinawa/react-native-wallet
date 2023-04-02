import React, {useState} from 'react';
import {Keyboard, SafeAreaView, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {ButtonPressable, Input} from '@components';
import {useAuth, useDarkMode} from '@hooks';
import {loginRequest} from './AuthSlice';

export function Login() {
  const dispatch = useDispatch();

  const {isLoadingAuth, errorMessage} = useAuth();
  const {isDarkMode} = useDarkMode();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    Keyboard.dismiss();
    dispatch(loginRequest({username, password}));
  };

  return (
    <SafeAreaView>
      <View className="w-full h-full px-10 bg-[#f3f2f8] dark:bg-[#17062a] pt-2 dark flex flex-col justify-center items-center">
        <Text className="text-3xl font-bold dark:text-white self-start mb-4">
          Login
        </Text>

        <Input
          autoFocus
          autoCapitalize="none"
          placeholder="Username"
          value={username}
          containerClassName="mb-4"
          onChangeText={(text: string) => setUsername(text)}
          onClearInput={() => setUsername('')}
          leadingIcon={
            <Ionicons
              name="at"
              size={20}
              color={isDarkMode ? '#ffffff' : '#b3b3b3'}
            />
          }
        />

        <Input
          disableClearInput
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          leadingIcon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={isDarkMode ? '#ffffff' : '#b3b3b3'}
            />
          }
        />

        <ButtonPressable
          disabled={!username || !password}
          isLoading={isLoadingAuth}
          containerClassName="w-full mt-4"
          textClassName="font-bold"
          text="Login"
          onPress={onPressLogin}
        />

        {!!errorMessage && (
          <Text className="text-sx text-red-500 mt-2 text-left">
            {errorMessage}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}
