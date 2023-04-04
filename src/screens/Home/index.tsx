import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {BottomNavigationLayout, DebitCard} from '@components';
import {ITransaction} from '@types';
import {useAuth, useNavigate} from '@hooks';
import {
  BalanceInfo,
  RecentTransactions,
  UserGreeting,
  ModalNotifications,
} from './sections';

export function Home() {
  const navigation = useNavigate();
  const {cardNumber, name} = useAuth();
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

      <DebitCard
        obscuredNumber
        name={name}
        cardNumber={cardNumber}
        onPress={() => navigation.navigate('Analytics')}
      />

      <RecentTransactions data={DATA} />

      <ModalNotifications
        visible={visible}
        closeModal={() => setVisible(false)}
      />
    </BottomNavigationLayout>
  );
}

export default Home;
