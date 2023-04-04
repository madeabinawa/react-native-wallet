import {Login, Home, Analytics, Contact, TransactionDetail} from '@screens';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Contacts: undefined;
  Analytics: undefined;
  TransactionsDetail: {id: string};
};

export type RouteType = {
  name: keyof RootStackParamList;
  component: React.ComponentType<{}>;
};

export const unAuthRoutes: RouteType[] = [
  {
    name: 'Login',
    component: Login,
  },
];

export const authRoutes: RouteType[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Analytics',
    component: Analytics,
  },
  {
    name: 'Contacts',
    component: Contact,
  },
  {
    name: 'TransactionsDetail',
    component: TransactionDetail,
  },
];
