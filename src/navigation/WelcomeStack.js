import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens/Welcome';
import {PrivacyPolicyScreen} from '../screens/PrivacyPolicyScreen';
import {TermServicesScreen} from '../screens/TermServicesScreen';
import {RegistrationStack} from './RegistrationStack';
import {LoginStack} from './LoginStack';

const Stack = createNativeStackNavigator();

export const WelcomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TermServicesScreen"
        component={TermServicesScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterStack"
        component={RegistrationStack}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginStack"
        component={LoginStack}
      />
    </Stack.Navigator>
  );
};
