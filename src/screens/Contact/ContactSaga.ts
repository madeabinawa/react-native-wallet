import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {getContactSuccess} from './ContactSlice';

import {services} from '@services';
import {IContact} from '@types';

function* workGetContactsFetch(): any {
  const contacts = yield call(() => services.get('/contacts'));

  const mapToContact: IContact[] = contacts?.data?.map((c: any) => ({
    avatar: c.avatar,
    name: c.name,
    bankName: c.bank_name,
    rekeningNumber: c.card_number,
    isFavorite: c.is_favorite,
  }));
  yield delay(800);
  yield put(getContactSuccess(mapToContact));
}

function* contactSaga() {
  yield takeEvery('contacts/getContactFetch', workGetContactsFetch);
}

export default contactSaga;
