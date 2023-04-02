import React from 'react';
import {View} from 'react-native';
import {IAnalyticsItem} from '..';
import {AnalyticCard} from './AnalyticCards';

export interface AnalyticsListProps {
  data: IAnalyticsItem[];
}

export function AnalyticsList({data}: AnalyticsListProps) {
  return (
    <View className="w-full flex flex-row space-x-2 justify-center items-center px-4">
      <View className="w-1/2 h-full">
        {data.map(
          (item, index) =>
            index % 2 === 0 && <AnalyticCard key={item.name} item={item} />,
        )}
      </View>

      <View className="w-1/2 h-full">
        {data.map(
          (item, index) =>
            index % 2 !== 0 && <AnalyticCard key={item.name} item={item} />,
        )}
      </View>
    </View>
  );
}
