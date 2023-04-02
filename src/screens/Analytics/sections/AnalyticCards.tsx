import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {IAnalyticsItem} from '..';
import {toDollarCurrency} from '@utilities';

export interface AnalyticCardsProps {
  item: IAnalyticsItem;
}

export function AnalyticCard({item}: AnalyticCardsProps) {
  return (
    <View
      className={`${item.bgColor} ${item.height} w-full flex flex-col justify-between rounded-xl p-3 `}>
      <View>
        {item?.arrowVisibility && (
          <View
            className={`${item.arrowRotation} bg-[#311166] w-6 h-6 flex justify-center items-center rounded-full mb-4`}>
            <Ionicons name="ios-arrow-up-outline" size={20} color="#ffffff" />
          </View>
        )}

        <View className="flex flex-row justify-between items-start">
          <Text className={`${item.textColor} text-[28px] mb-2 leading-[29px]`}>
            {item.name}
          </Text>
        </View>
      </View>

      <View className="flex flex-row justify-between items-start">
        <Text className={`${item.textColor} text-2xl mb-2 leading-[29px]`}>
          {toDollarCurrency(item?.amount)}
        </Text>
      </View>
    </View>
  );
}
