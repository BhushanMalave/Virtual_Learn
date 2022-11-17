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

import {PersonalDetails} from '../VirtualLearn/src/screens/PersonalDetails';
import { EditProfile } from './src/screens/EditProfile';
import { OnboardingStack } from './src/navigation/OnboardingStack';
import { DrawerNav } from './src/navigation/DrawerNav';
import { HomeSearch } from './src/screens/HomeSearch';


const App = () => {
  return(
   <DrawerNav/>
  )
 



};


export default App;
