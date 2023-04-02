import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDarkMode, useNavigate} from '@hooks';

export interface HeaderNavigationProps {
  backButton?: boolean;
  title: string;
  children?: ReactNode;
}

export function HeaderNavigation({
  backButton,
  title,
  children,
}: HeaderNavigationProps) {
  const {isDarkMode} = useDarkMode();
  const navigation = useNavigate();
  return (
    <SafeAreaView>
      <View className="bg-[#f3f2f8] dark:bg-[#17062a] flex flex-row justify-between w-full px-2">
        <View className="flex flex-row justify-start items-center py-2">
          {backButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-arrow-back-outline"
                size={24}
                color={isDarkMode ? '#ffffff' : '#334155'}
              />
            </TouchableOpacity>
          )}
          <Text className="text-xl font-bold text-slate-700 dark:text-white pl-4">
            {title}
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="h-full bg-[#f3f2f8] dark:bg-[#17062a] pt-2 ">
        {children}
        <View className="pb-20" />
      </ScrollView>
    </SafeAreaView>
  );
}
