import * as React from 'react';
import {WelcomeScreen} from '../screens/Welcome';
import {PrivacyPolicyScreen} from '../screens/PrivacyPolicyScreen';
import {TermServicesScreen} from '../screens/TermServicesScreen';
import {RegistrationStack} from './RegistrationStack';
import {LoginStack} from './LoginStack';

import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const WelcomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="TermServicesScreen"
        component={TermServicesScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="RegisterStack"
        component={RegistrationStack}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="LoginStack"
        component={LoginStack}
      />
    </Stack.Navigator>
  );
};
