import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

import {TabType} from '..';

export interface ContactCategoriesProps {
  selectedTab: TabType;
  onChangeTab: React.Dispatch<TabType>;
}

export function ContactCategories({
  selectedTab,
  onChangeTab,
}: ContactCategoriesProps) {
  const DATA: TabType[] = ['all', 'favorites'];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      className="my-4"
      horizontal
      data={DATA}
      keyExtractor={item => item}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => onChangeTab(item)}
          className={`w-auto h-8 bg-slate-200 dark:bg-[#311167] mr-2 px-4 flex justify-center items-center rounded-full  ${
            index === 0 && 'ml-2'
          } ${
            selectedTab === item &&
            'border border-1 border-[#311167] dark:border-[#a1c032]'
          }`}>
          <Text className="text-slate-700 dark:text-white capitalize">
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
