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
import { HomeStack } from './src/navigation/HomeStack';
import { Router } from './src/navigation/Route';

import { Chapters } from './src/screens/Chapters';
import { ChaptersScreen } from './src/screens/ChaptersScreen';


const App = () => {
  return(
   <ChaptersScreen/>
  )
};


export default App;
