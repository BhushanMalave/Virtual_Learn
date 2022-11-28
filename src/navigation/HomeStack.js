import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {HomeSearch} from '../screens/HomeSearch';
import {ChoiceYourCourse} from '../screens/ChoiceYourCourse';
import {CategoryDisplayScreen} from '../screens/CategoryDisplayScreen';
import {CourseScreen} from '../screens/CourseScreen';
import {CongratulationScreen} from '../screens/CongratulationScreen';
import {TestStack} from './TestStack';
import {VideoPlayer} from '../components/VideoPlayer';
import {CourseComponent} from '../components/CourseComponent';
import { OnGoingComponent } from '../components/OnGoingComponent';
import {LessonVideoPlayer} from '../components/LessonVideoPlayer';
import {ContinuePopUp} from '../components/chaptes/ContinuePopUp';
import { CertificateScreen } from '../screens/CertificateScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeSearch"
        component={HomeSearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChoiceCourse"
        component={ChoiceYourCourse}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryDisplayScreen"
        component={CategoryDisplayScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CourseComponent"
        component={CourseComponent}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="OnGoingComponent"
        component={OnGoingComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LessonVideoPlayer"
        component={LessonVideoPlayer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ContinuePopUp"
        component={ContinuePopUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TestStack"
        component={TestStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CertificateScreen"
        component={CertificateScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
