import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {IContact} from '@types';

export interface ContactItemProps {
  contact: IContact;
  onTap: (contact: IContact) => void;
}

export function ContactItem({contact, onTap}: ContactItemProps) {
  return (
    <TouchableOpacity
      className="flex flex-row justify-between items-center m-2 "
      onPress={() => onTap(contact)}>
      <View className="flex flex-row items-center">
        <View className="w-11 h-11 rounded-full bg-white mr-2" />
        <View className="flex flex-col">
          <Text className="text-base text-slate-700 dark:text-white -mt-1">
            {contact.name}
          </Text>
          <Text className="text-sm text-slate-400">{`${contact.bankName} \u2022 ${contact.rekeningNumber}`}</Text>
        </View>
      </View>
      {contact.isFavorite && (
        <IonIcons name="ios-star-sharp" size={20} color="#feaf28" />
      )}
    </TouchableOpacity>
  );
}
