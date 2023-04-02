import contactsReducer from '../screens/Contact/ContactSlice';
import authReducer from '../screens/Login/AuthSlice';

export const reducer = {
  contacts: contactsReducer,
  auth: authReducer,
};
