import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import store from "./src/redux/Store/store"
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Router} from './src/navigation/Route';
import {ForgotPassword} from './src/screens/ForgotPassword';
import { Test } from './src/screens/Test';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Test/>
      </PersistGate>
    </Provider>
  
  );
};

export default App;
