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

import store from './src/redux/Store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Router} from './src/navigation/Route';
import { TestBottomPopUp } from './src/components/TestBottomPopUp';
import { MockTestResultScreen } from './src/screens/MockTestResultScreen';
import { Test } from './src/screens/Test';
import { TimerComponent } from './src/components/TimerComponent';
import { HomeScreen } from './src/screens/HomeScreen';


let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <HomeScreen/>
      </PersistGate>
    </Provider>
  );
};

export default App;
