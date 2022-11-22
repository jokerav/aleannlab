import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {dataApi} from './dataApi';
const dataPersistConfig = {
  key: 'data',
  storage,
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  dataApi.middleware,
];

const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: persistReducer(dataPersistConfig, dataApi.reducer),
  },
  middleware,
});
const persistor = persistStore(store);
export { store, persistor };

