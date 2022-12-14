import * as React from 'react';
import {NewAccount} from '../screens/NewAccount';
import {VerifyAccount} from '../screens/VerifyAccount';
import {PersonalDetails} from '../screens/PersonalDetails';
import {RegisterSuccessfully} from '../screens/RegisterSuccessfully';


import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const RegistrationStack = () => {
  return (
    <Stack.Navigator initialRouteName='New Account'>
      <Stack.Screen
        name="New Account"
        component={NewAccount}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="VerifyAccount"
        component={VerifyAccount}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="Personal Details"
        component={PersonalDetails}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Registration Successfull"
        component={RegisterSuccessfully}
      />
    </Stack.Navigator>
  );
};
