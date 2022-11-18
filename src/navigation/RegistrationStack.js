import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NewAccount } from '../screens/NewAccount';
import { VerifyAccount } from '../screens/VerifyAccount';
import { PersonalDetails } from '../screens/PersonalDetails';
import { RegisterSuccessfully } from '../screens/RegisterSuccessfully';
import { CreateNewPassword } from '../screens/CreateNewPassword';
import { PasswordChange } from '../screens/PasswordChangeSuccessfully';

const Stack = createNativeStackNavigator();

export const RegistrationStack = () => {
  return (
  
    <Stack.Navigator>
      <Stack.Screen
        name="New Account"
        component={NewAccount}
        options={{headerShown: false}}
      />
    
      <Stack.Screen
        name="VerifyAccount"
        component={VerifyAccount}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Personal Details"
        component={PersonalDetails}
        options={{headerShown: false}}
      />

   
      
         <Stack.Screen
        options={{headerShown: false}}
        name="Registration Successfull"
        component={RegisterSuccessfully}
      /> 
    </Stack.Navigator>
 
  );
};
