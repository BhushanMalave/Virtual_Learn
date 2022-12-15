import * as React from 'react';
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
import {FinalTestStack} from './FinalTeststack';
import {ModularTest} from '../components/chaptes/ModuleTest';

import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const CourseStack = () => {
  return (
    <Stack.Navigator initialRouteName="MyCourse">
      <Stack.Screen
        name="MyCourse"
        component={MyCourse}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CourseComponent"
        component={CourseComponent}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OnGoingComponent"
        component={OnGoingComponent}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CompletedComponent"
        component={CompletedComponent}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="LessonVideoPlayer"
        component={LessonVideoPlayer}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="ContinuePopUp"
        component={ContinuePopUp}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="TestStack"
        component={TestStack}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="FinalTestStack"
        component={FinalTestStack}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CertificateScreen"
        component={CertificateScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CategoryDisplayScreen"
        component={CategoryDisplayScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ModularTest"
        component={ModularTest}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
