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
<<<<<<< HEAD
import { HomeScreen } from './src/screens/HomeScreen';
import {CourseScreen} from './src/screens/CourseScreen';
import { MyCourse } from './src/screens/MyCourse';
import MyCourseFirstScreen from './src/screens/MyCourseEmptyScreen';
import MyCourseEmptyScreen from './src/screens/MyCourseEmptyScreen';
import { OverviewScreen } from './src/screens/OverviewScreen';
=======
import { HomeStack } from './src/navigation/HomeStack';
import { Router } from './src/navigation/Route';
>>>>>>> a136fdbd339d6052a64b7939ebb56a0f8238bfbf

let persistor = persistStore(store);

const App = () => {
  return(
<<<<<<< HEAD
  

    <CourseScreen/>
  
=======
   <Router/>
>>>>>>> a136fdbd339d6052a64b7939ebb56a0f8238bfbf
  )
};

export default App;
