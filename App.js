import React from 'react';

import {
 LogBox
} from 'react-native';

import store from './src/redux/Store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Router} from './src/navigation/Route';
import {Test} from './src/screens/Test'
import { TimerComponent } from './src/components/TimerComponent';

let persistor = persistStore(store);
 LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router/>
      </PersistGate>
    </Provider>
  );
};

export default App;
