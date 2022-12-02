import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyCourse} from '../screens/MyCourse';
import {CourseScreen} from '../screens/CourseScreen';
import {TestStack} from './TestStack';
import {CourseComponent} from '../components/CourseComponent';
import {OnGoingComponent} from '../components/OnGoingComponent';
import {LessonVideoPlayer} from '../components/LessonVideoPlayer';
import {ContinuePopUp} from '../components/chaptes/ContinuePopUp';
import {CertificateScreen} from '../screens/CertificateScreen';
import {CategoryDisplayScreen} from '../screens/CategoryDisplayScreen';
import {CompletedComponent} from '../components/CompletedComponent'; 
import { FinalTestStack } from './FinalTeststack';
import { ModularTest } from '../components/chaptes/ModuleTest';

const Stack = createNativeStackNavigator();

export const CourseStack = () => {
  return (
    <Stack.Navigator initialRouteName="MyCourse">
      <Stack.Screen
        name="MyCourse"
        component={MyCourse}
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
        name="CompletedComponent"
        component={CompletedComponent}
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
        name="FinalTestStack"
        component={FinalTestStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CertificateScreen"
        component={CertificateScreen}
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
        name="ModularTest"
        component={ModularTest}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};
