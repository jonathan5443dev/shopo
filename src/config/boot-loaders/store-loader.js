import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../../redux/reducers/index';
import rootSaga from '../../redux/sagas/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default class StoreLoader {
  static boot(App) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      persistedReducer,
      applyMiddleware(sagaMiddleware)
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    App.redux = {store, persistor};
  }
}