import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {toDollarCurrency} from '@utilities';
import {useAuth} from '@hooks';

export function BalanceInfo() {
  const {balance} = useAuth();
  return (
    <View className="flex flex-col mt-8 px-3">
      <Text className="text-base text-slate-400 mb-2">Total Balance</Text>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-4xl text-slate-700 dark:text-white ">
          {toDollarCurrency(balance)}
        </Text>

        <TouchableOpacity className="bg-slate-200 dark:bg-[#271a3c] rounded-2xl p-2 flex flex-row justify-between items-center">
          <Ionicons name="ios-pie-chart-outline" size={20} color="#a1c032" />
          <Text className="ml-2 text-slate-700 dark:text-white">Analytics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
