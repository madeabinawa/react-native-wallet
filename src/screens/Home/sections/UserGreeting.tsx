import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDarkMode} from '@hooks';

export interface UserGreetingProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UserGreeting({setVisible}: UserGreetingProps) {
  const {isDarkMode} = useDarkMode();

  return (
    <View className="flex flex-row justify-between items-center px-3">
      <View className="flex flex-row items-center ">
        <View className="w-11 h-11 rounded-full bg-white mr-2" />
        <View className="flex flex-col">
          <Text className="text-sm text-slate-400">Good Morning,</Text>
          <Text className="text-base text-slate-700 dark:text-white -mt-1 ">
            John Doe
          </Text>
        </View>
      </View>
      <View className="flex flex-row">
        <TouchableOpacity
          className="w-11 h-11 rounded-full bg-slate-200 dark:bg-[#271a3c] mr-2 justify-center items-center"
          onPress={() => setVisible(prev => !prev)}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={isDarkMode ? '#ffffff' : '#b3b3b3'}
          />
        </TouchableOpacity>

        <TouchableOpacity className="w-11 h-11 rounded-full bg-slate-200 dark:bg-[#271a3c] justify-center items-center">
          <Ionicons
            name="ios-menu-outline"
            size={22}
            color={isDarkMode ? '#ffffff' : '#b3b3b3'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
