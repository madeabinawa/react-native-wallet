import React, {ReactNode} from 'react';
import type {ReactElement} from 'react';
import {View, Image, Text, TouchableOpacity, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import VisaLogo from '@assets/images/visa-logo.png';

const disableCard = (Component: ReactNode) => {
  return (
    <Pressable className="px-3 mt-4" disabled={true}>
      {Component}
    </Pressable>
  );
};

const touchableCard = (Component: ReactNode, onPress?: () => void) => {
  return (
    <TouchableOpacity className="px-3 mt-4" onPress={onPress}>
      {Component}
    </TouchableOpacity>
  );
};

const Card = (
  <View className="w-full h-48 bg-[#311167] rounded-2xl">
    <View className="h-full flex flex-row justify-between">
      <View className="h-full flex flex-col justify-around items-start p-4">
        <Image className="h-12 w-16" resizeMode="contain" source={VisaLogo} />

        <Text className="text-white text-3xl">**** **** 8761</Text>

        <View className="flex flex-col">
          <Text className="text-slate-500 text-sm">Card Holder</Text>
          <Text className="text-white text-base">Dayat Santoso</Text>
        </View>
      </View>

      <View className="bg-[#2a1451] px-8 flex- flex-col justify-around rounded-r-2xl">
        <View className="flex flex-col justify-center items-center">
          <Fontisto name="world-o" size={40} color="#4d2e82" />
        </View>
        <View className="flex flex-col justify-start">
          <Text className="text-slate-500 text-sm">Expires</Text>
          <Text className="text-white text-base font-medium">12/24</Text>
        </View>
      </View>
    </View>
  </View>
);

export interface DebitCardProps {
  onPress?: () => void;
  obscuredNumber?: boolean;
  disabled?: boolean;
}

export function DebitCard({
  onPress,
  disabled = false,
}: DebitCardProps): ReactElement {
  return disabled ? disableCard(Card) : touchableCard(Card, onPress);
}
