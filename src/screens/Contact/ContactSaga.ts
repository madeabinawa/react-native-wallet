import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {getContactSuccess} from './ContactSlice';
import {IContact} from '@types';

function* workGetContactsFetch(): any {
  const contacts = yield call(() =>
    fetch('https://641b9a041f5d999a4466380c.mockapi.io/api/v1/contacts'),
  );

  const contactsFormat = yield contacts.json();

  const mapToContact: IContact[] = contactsFormat?.map((c: any) => ({
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
