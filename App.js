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
import { HomeScreen } from './src/screens/HomeScreen';
import {CourseScreen} from './src/screens/CourseScreen';
import { MyCourse } from './src/screens/MyCourse';
import MyCourseFirstScreen from './src/screens/MyCourseEmptyScreen';
import MyCourseEmptyScreen from './src/screens/MyCourseEmptyScreen';
import { OverviewScreen } from './src/screens/OverviewScreen';


const App = () => {
  return(
  

    <CourseScreen/>
  
  )
 



};


export default App;
