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
import {BottomPopup} from './src/components/BottomPopup'

import {ContinuePopUp} from './src/components/chaptes/ContinuePopUp'
import {ChaptersScreen} from './src/screens/ChaptersScreen'

let persistor = persistStore(store);

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
