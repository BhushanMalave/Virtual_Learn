import * as React from 'react';
import {ForgotPassword} from '../screens/ForgotPassword';
import {Verification} from '../screens/Verification';
import {PasswordChange} from '../screens/PasswordChangeSuccessfully';
import {CreateNewPassword} from '../screens/CreateNewPassword';
import { Login } from '../screens/Login';

import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
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
        name="Password Changed Successfully"
        component={PasswordChange}
      />
    </Stack.Navigator>
  );
};
