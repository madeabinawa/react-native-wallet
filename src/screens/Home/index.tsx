import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {DebitCard, BottomNavigationLayout} from '@components';
import {ITransaction} from '@types';
import {BalanceInfo, RecentTransactions, UserGreeting} from './sections';
import {ModalNotifications} from './sections/ModalNotifications';

export interface HomescreenProps {}

export function Home() {
  const navigation = useNavigation();
  const TODAY = new Date();
  const DATA: ITransaction[] = [
    {
      id: '1',
      name: 'Dribble',
      detail: 'Subscription',
      amount: 180,
      createdAt: TODAY,
    },
    {
      id: '2',
      name: 'Netflix',
      detail: 'Subscription',
      amount: 15.99,
      createdAt: TODAY,
    },
    {
      id: '3',
      name: 'Spotify',
      detail: 'Subscription',
      amount: 40,
      createdAt: TODAY,
    },
  ];

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <BottomNavigationLayout>
      <UserGreeting setVisible={setVisible} />
      <View className="px-3 mt-6 divide-y-0 divide-slate-500">
        <Text className="text-5xl font-normal text-slate-700 dark:text-white">
          My Debit Cards
        </Text>
      </View>
      <BalanceInfo />
      <DebitCard onPress={() => navigation.navigate('Analytics')} />
      <RecentTransactions data={DATA} />
      <ModalNotifications
        visible={visible}
        closeModal={() => setVisible(false)}
      />
    </BottomNavigationLayout>
  );
}
