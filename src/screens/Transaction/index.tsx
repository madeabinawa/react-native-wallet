import React from 'react';
import {View, Text} from 'react-native';
import {HeaderNavigation} from '@components';
import UnderConstruction from '@assets/svgs/under_construction.svg';

export function TransactionDetail() {
  return (
    <HeaderNavigation backButton title="Transaction Detail">
      <View className="w-full h-full flex flex-col justify-center items-center">
        <UnderConstruction width={300} height={300} className="-mb-4" />

        <Text className="text-center text-xl font-medium text-slate-700 dark:text-white">
          Work In Progress
        </Text>
      </View>
    </HeaderNavigation>
  );
}
