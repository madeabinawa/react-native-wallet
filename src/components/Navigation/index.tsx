import React, {ReactNode} from 'react';
import {View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import type {ReactElement} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

export interface NavigationProps {
  children: ReactNode;
}

export function BottomNavigationLayout({
  children,
}: NavigationProps): ReactElement {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="h-full bg-[#f3f2f8] dark:bg-[#17062a] pt-2 ">
        {children}

        <View className="pb-20" />
      </ScrollView>

      <View className="relative">
        <View className="w-full h-[56px] absolute bottom-0 bg-slate-200 dark:bg-[#271a3c] flex flex-row justify-evenly items-center rounded-t-2xl">
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="p-2">
            <SimpleLineIcons
              name="home"
              size={20}
              color={route.name === 'Home' ? '#a1c032' : '#453d4e'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Analytics')}
            className="p-2">
            <SimpleLineIcons
              name="pie-chart"
              size={20}
              color={route.name === 'Analytics' ? '#a1c032' : '#453d4e'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            className="p-2">
            <SimpleLineIcons
              name="people"
              size={20}
              color={route.name === 'Contacts' ? '#a1c032' : '#453d4e'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
