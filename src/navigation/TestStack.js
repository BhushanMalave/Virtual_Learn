import * as React from 'react';
import {Test} from '../screens/Test';
import {CongratulationScreen} from '../screens/CongratulationScreen';
import {MockTestResultScreen} from '../screens/MockTestResultScreen';
import {CourseCompletedScreen} from '../screens/CourseCompletedScreen';
import {CourseScreen} from '../screens/CourseScreen';
import {ModularTest} from '../components/chaptes/ModuleTest';
import {HomeScreen} from '../screens/HomeScreen';
import { HomeStack } from './HomeStack';

import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const TestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CongratulationScreen"
        component={CongratulationScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="MockTestResultScreen"
        component={MockTestResultScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="CourseCompletedScreen"
        component={CourseCompletedScreen}
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
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />


    </Stack.Navigator>
  );
};
