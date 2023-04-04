import React from 'react';
import {View, Text} from 'react-native';
import {HeaderNavigation} from '@components';

export function TransactionDetail() {
  return (
    <HeaderNavigation backButton title="Transaction Detail">
      <View className="w-full h-full flex flex-col justify-center items-center">
        <Text className="text-center text-xl text-slate-700 dark:text-white">
          Empty
        </Text>
      </View>
    </HeaderNavigation>
  );
}
