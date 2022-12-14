import * as React from 'react';
import {CourseCompletedScreen} from '../screens/CourseCompletedScreen';
import {CourseScreen} from '../screens/CourseScreen';
import {FinalTest} from '../screens/FinalTest';
import {FinalCongratulationScreen} from '../screens/FinalCongratulationScreen';
import {CertificateScreen} from '../screens/CertificateScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {ModularTest} from '../components/chaptes/ModuleTest';


import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export const FinalTestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FinalTest"
        component={FinalTest}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="FinalCongratulationScreen"
        component={FinalCongratulationScreen}
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
        name="CertificateScreen"
        component={CertificateScreen}
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
        name="HomeScreen"
        component={HomeScreen}
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
