import {MMKVLoader} from 'react-native-mmkv-storage';
import {persistReducer} from 'redux-persist';
import mmkvFlipper from 'rn-mmkv-storage-flipper';

import {rootReducers} from './reducers';

const storage = new MMKVLoader().initialize();
mmkvFlipper(storage);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);
