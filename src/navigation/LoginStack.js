import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { ForgotPassword } from '../screens/ForgotPassword';
import { Verification } from '../screens/Verification';
import { PasswordChange } from '../screens/PasswordChangeSuccessfully';
import { CreateNewPassword } from '../screens/CreateNewPassword';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
        options={{headerShown: false}}
      />
         <Stack.Screen
        options={{headerShown: false}}
        name="Password Changed Successfully"
        component={PasswordChange}
      /> 
    </Stack.Navigator>
 
  );
};