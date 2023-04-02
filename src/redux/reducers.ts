import {combineReducers} from '@reduxjs/toolkit';

import contactsReducer from '../screens/Contact/ContactSlice';
import authReducer from '../screens/Login/AuthSlice';

export const rootReducers = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
