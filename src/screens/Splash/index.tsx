import React from 'react';
import {ActivityIndicator, Image, SafeAreaView, View} from 'react-native';

import Logo from '@assets/images/wallet.png';
import {useDarkMode} from '@hooks';

export function Splash() {
  const {isDarkMode} = useDarkMode();

  return (
    <SafeAreaView>
      <View className="w-full h-full bg-[#f3f2f8] dark:bg-[#17062a] flex flex-col justify-center items-center">
        <Image className="w-1/3 h-52 mb-4" resizeMode="contain" source={Logo} />
        <ActivityIndicator color={isDarkMode ? '#ffffff' : '#17062a'} />
      </View>
    </SafeAreaView>
  );
}
