import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MyProfile } from '../screens/MyProfile';
import { EditProfile } from '../screens/EditProfile';
import { CreateNewPassword } from '../screens/CreateNewPassword';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
        options={{headerShown: false}}
      />
    
     
    </Stack.Navigator>
 
  );
};