import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {dateFormat, toDollarCurrency} from '@utilities';

export type StatusContactTransactionItem = 'send' | 'receive';

export interface ContactTransactionItemProps {
  title: string;
  amount: number;
  status: StatusContactTransactionItem;
}

export const ContactTransactionItem = ({
  title,
  amount,
  status,
}: ContactTransactionItemProps) => {
  const isReceiveMoney = status === 'receive';

  const iconConf = {
    icon: isReceiveMoney ? 'ios-arrow-down-outline' : 'ios-arrow-up-outline',
    color: isReceiveMoney ? '#1cc460' : '#da2d2b',
  };

  return (
    <TouchableOpacity className="mt-1 mb-2 mx-2">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row justify-start items-center">
          <Ionicons name={iconConf.icon} size={20} color={iconConf.color} />
          <View>
            <Text className="text-base text-slate-700 dark:text-white  mx-2">
              {title}
            </Text>
            <Text className="text-sm text-slate-700 dark:text-white  mx-2">
              {dateFormat('2023-03-28', 'long')}
            </Text>
          </View>
        </View>

        <Text
          className={`${
            isReceiveMoney ? 'text-green-600' : 'text-red-600'
          } mx-2`}>
          {toDollarCurrency(amount)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
