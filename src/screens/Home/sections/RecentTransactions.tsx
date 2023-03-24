import React from 'react';
import type {ReactElement} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {ITransaction} from '@types';
import {TransactionCard} from './TransactionCard';

export interface RecentTransactionsProps {
  data: ITransaction[];
}

export function RecentTransactions({data}: RecentTransactionsProps) {
  return (
    <View className="w-full flex flex-col mt-8 pb-10">
      <View className="flex flex-row justify-between px-3">
        <Text className="text-base text-slate-400 mb-2">
          Recent Transaction
        </Text>
        <TouchableOpacity>
          <Text className="text-base text-slate-700 dark:text-white">
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-full h-44">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}): ReactElement => (
            <TransactionCard
              containerClassName={index === 0 ? 'ml-3' : ''}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
}
