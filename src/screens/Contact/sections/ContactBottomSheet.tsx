import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useDarkMode} from '@hooks';
import {IContact} from '@types';
import {ContactTransactionItem} from './ContactTransactionItem';

export interface ContactBottomSheetProps {
  contact: IContact | undefined;
  bottomSheetRef: React.RefObject<BottomSheet>;
}

export function ContactBottomSheet({
  contact,
  bottomSheetRef,
}: ContactBottomSheetProps) {
  const {isDarkMode} = useDarkMode();
  const snapPoints = useMemo(() => ['40%', '70%'], []);

  return (
    <BottomSheet
      enablePanDownToClose
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backgroundStyle={
        isDarkMode ? styles.darkContainer : styles.lightContainer
      }>
      <View className="bg-slate-200 dark:bg-[#311167] px-2 flex flex-col">
        <Text className="text-slate-700 dark:text-white text-2xl">
          {contact?.name}
        </Text>
        <Text className="text-base text-slate-400">
          {contact?.bankName} {'\u2022'} {contact?.rekeningNumber}
        </Text>

        <Text className="mt-6 mb-3 text-lg font-medium text-slate-700 dark:text-white">
          Transactions History
        </Text>
      </View>

      <BottomSheetScrollView>
        <ContactTransactionItem
          title="Birthday treat"
          amount={200}
          status="send"
        />
        <ContactTransactionItem
          title="Yesterday split bill "
          amount={50}
          status="receive"
        />
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: '#dee7f0',
  },
  darkContainer: {
    backgroundColor: '#311167',
  },
});
