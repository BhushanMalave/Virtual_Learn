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

import {ChaptersScreen} from './src/screens/ChaptersScreen';
import {PersonalDetails} from './src/screens/PersonalDetails';
import {EditProfile} from './src/screens/EditProfile'
import {HomeScreen} from './src/screens/HomeScreen';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChaptersScreen/>
      </PersistGate>
    </Provider>
  
  );
};

export default App;
