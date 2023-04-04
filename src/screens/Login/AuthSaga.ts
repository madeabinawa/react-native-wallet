import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {IUser} from '@types';
import {getUserFailed, GetUserFetchType, getUserSuccess} from './AuthSlice';

interface IUserPassword extends IUser {
  password: string;
}

function* workGetUserFetch(action: PayloadAction<GetUserFetchType>): any {
  try {
    const users = yield call(() =>
      fetch('https://641b9a041f5d999a4466380c.mockapi.io/api/v1/users'),
    );

    const usersFormat = yield users.json();

    const mapUsers: IUserPassword[] = usersFormat?.map((u: any) => ({
      name: u.name,
      avatar: u.avatar,
      balance: u.balance,
      username: u.username,
      cardNumber: u.card_number,
      token: u.token,
      password: u.password,
    }));

    const {username, password} = action.payload;

    const authedUser = mapUsers.find(
      u => u.username === username && u.password === password,
    );

    if (!authedUser) {
      throw new Error('User does not exist');
    }

    yield put(getUserSuccess(authedUser as IUser));
  } catch (error) {
    yield put(getUserFailed('User does not exist'));
  }
}

function* userSaga() {
  yield takeEvery('auth/loginRequest', workGetUserFetch);
}

export default userSaga;
