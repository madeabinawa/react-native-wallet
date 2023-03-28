import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet, {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Contacts from '@assets/datas/contacts.json';
import {BottomNavigationLayout} from '@components';
import {IContact} from '@types';
import {useDarkMode} from '@hooks';

import {ContactCategories, ContactItem, ContactBottomSheet} from './sections';

export type TabType = '' | 'all' | 'favorites';

const Contact = () => {
  const DATA: IContact[] = Contacts.data;
  const {isDarkMode} = useDarkMode();
  const [tab, setTab] = useState<TabType>('all');
  const [key, setKey] = useState('');
  const [selectedContact, setContact] = useState<IContact | undefined>(
    undefined,
  );

  const filterTab = useCallback(
    (data: IContact[]) =>
      tab === 'all' ? data : data.filter(d => d.isFavorite),
    [tab],
  );

  const memoizedData = useMemo(
    () => filterTab(DATA.filter(c => c.name.includes(key))),
    [key, filterTab, DATA],
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  const expandBottomSheet = (contact: IContact) => {
    setContact(contact);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const clearInput = () => setKey('');

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <BottomNavigationLayout>
          <View className="bg-slate-200 dark:bg-[#311167] mx-2 px-8 flex flex-row justify-center items-center rounded-xl">
            <Ionicons
              name="ios-search-outline"
              size={20}
              color={isDarkMode ? '#ffffff' : '#b3b3b3'}
            />

            <TextInput
              className="w-full h-10 p-2 text-slate-700 dark:text-white"
              placeholder="Search Contacts..."
              defaultValue={key}
              onChangeText={setKey}
            />

            <TouchableOpacity
              className="bg-slate-600 rounded-full w-5 flex justify-center items-center"
              onPress={clearInput}>
              <View className={key.length > 0 ? 'visible' : 'hidden'}>
                <Ionicons name="ios-close-outline" size={20} color="#ffffff" />
              </View>
            </TouchableOpacity>
          </View>

          <ContactCategories selectedTab={tab} onChangeTab={setTab} />

          {memoizedData.map((item, index) => (
            <ContactItem
              key={`${item.name}${index}`}
              contact={item}
              onTap={expandBottomSheet}
            />
          ))}
        </BottomNavigationLayout>
        <ContactBottomSheet
          contact={selectedContact}
          bottomSheetRef={bottomSheetRef}
        />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Contact;
