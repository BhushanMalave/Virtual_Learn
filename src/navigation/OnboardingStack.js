import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import {OnBoardingScreen1} from '../screens/OnBoardingScreen1';
import {OnBoardingScreen2} from '../screens/OnBoardingScreen2';
import {OnBoardingScreen3} from '../screens/OnBoardingScreen3';
import {WelcomeStack} from './WelcomeStack';

const Stack = createNativeStackNavigator();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoardingScreen1"
        component={OnBoardingScreen1}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="OnBoardingScreen2"
        component={OnBoardingScreen2}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="OnBoardingScreen3"
        component={OnBoardingScreen3}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="WelcomeStack"
        component={WelcomeStack}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
