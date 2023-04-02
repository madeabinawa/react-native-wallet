import type {ReactElement} from 'react';
import React, {ReactNode} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import VisaLogo from '@assets/images/visa-logo.png';
import {cardNumberFormat} from '@utilities';

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

export interface DebitCardProps {
  disabled?: boolean;
  onPress?: () => void;
  name: string;
  cardNumber: string;
  obscuredNumber?: boolean;
}

export function DebitCard({
  disabled = false,
  onPress,
  name,
  cardNumber,
  obscuredNumber,
}: DebitCardProps): ReactElement {
  const formatCardNumber = cardNumberFormat(cardNumber);

  const Card = (
    <View className="w-full h-48 bg-[#311167] rounded-2xl">
      <View className="h-full flex flex-row justify-between">
        <View className="h-full flex flex-col justify-around items-start p-4">
          <Image className="h-12 w-16" resizeMode="contain" source={VisaLogo} />

          <Text className="text-white text-3xl">
            {obscuredNumber
              ? formatCardNumber.obscured
              : formatCardNumber.plain}
          </Text>

          <View className="flex flex-col">
            <Text className="text-slate-500 text-sm">Card Holder</Text>
            <Text className="text-white text-base">{name}</Text>
          </View>
        </View>

        <View className="bg-[#2a1451] px-8 flex- flex-col justify-around rounded-r-2xl">
          <View className="flex flex-col justify-center items-center">
            <Fontisto name="world-o" size={40} color="#4d2e82" />
          </View>
          <View className="flex flex-col justify-start">
            <Text className="text-white dark:text-slate-500 text-sm">
              Expires
            </Text>
            <Text className="text-white text-base font-medium">12/24</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return disabled ? disableCard(Card) : touchableCard(Card, onPress);
}
