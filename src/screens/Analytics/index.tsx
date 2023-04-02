import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {DebitCard} from '../../components';
import {BottomNavigationLayout} from '../../components/Navigation';
import {AnalyticsList} from './sections';

export interface IAnalyticsItem {
  id: string;
  arrowVisibility?: boolean;
  arrowRotation?: string;
  bgColor: string;
  textColor: string;
  height: string;
  name: string;
  amount: number;
}

export function Analytics() {
  const data: IAnalyticsItem[] = [
    {
      id: '1',
      arrowVisibility: true,
      arrowRotation: 'rotate-[145deg]',
      bgColor: 'bg-[#eae9ef]',
      textColor: 'text-[#311166]',
      height: 'h-48',
      name: 'September income',
      amount: 7422,
    },
    {
      id: '2',
      arrowVisibility: true,
      arrowRotation: 'rotate-[45deg]',
      bgColor: 'bg-[#abe20b]',
      textColor: 'text-[#311166]',
      height: 'h-60',
      name: 'Expenses',
      amount: 4132.99,
    },
    {
      id: '3',
      arrowVisibility: false,
      bgColor: 'bg-[#311167]',
      textColor: 'text-white',
      height: 'h-40 my-3',
      name: 'Perfomance',
      amount: 0,
    },
    {
      id: '4',
      arrowVisibility: false,
      bgColor: 'bg-[#17062a]',
      textColor: 'text-white',
      height: 'h-48 my-3',
      name: 'Expenses Category',
      amount: 0,
    },
  ];

  return (
    <BottomNavigationLayout>
      <DebitCard disabled />

      <View className="w-full flex flex-col mt-8">
        <View className="flex flex-row justify-between px-3">
          <Text className="text-base text-slate-400 mb-2">Statistics</Text>
          <TouchableOpacity>
            <Text className="text-base text-slate-700 dark:text-white">
              View All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <AnalyticsList data={data} />
    </BottomNavigationLayout>
  );
}
