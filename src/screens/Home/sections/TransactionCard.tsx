import React from 'react';
import {StackActions} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigate} from '@hooks';
import {ITransaction} from '@types';
import {dateFormat, toDollarCurrency} from '@utilities';

export interface TransactionCardProps {
  containerClassName?: string;
  item: ITransaction;
}

export function TransactionCard({
  containerClassName,
  item,
}: TransactionCardProps) {
  const navigation = useNavigate();
  const pushAction = StackActions.push('TransactionsDetail');

  return (
    <TouchableOpacity
      className={`flex flex-col justify-between h-full p-3 bg-slate-200 dark:bg-[#271a3c] rounded-xl mr-3 ${containerClassName}`}
      onPress={() => navigation.dispatch(pushAction)}>
      <View className="w-32">
        <View className="flex flex-row justify-between items-start">
          <Text className="text-slate-700 dark:text-white text-3xl mb-2">
            {item.name}
          </Text>
          <View className="rotate-45">
            <Ionicons name="ios-arrow-up-outline" size={20} color="#a1c032" />
          </View>
        </View>
        <Text className="text-slate-500 text-sm">{item.detail}</Text>
      </View>
      <View className="flex flex-row flex-grow-0 justify-between items-center">
        <Text className="text-[#a1c032] text-sm">
          {toDollarCurrency(item.amount)}
        </Text>
        <Text className="text-slate-500 text-sm">
          {dateFormat('2023-03-28', 'dmy')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
