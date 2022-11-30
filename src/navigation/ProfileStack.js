import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyProfile} from '../screens/MyProfile';
import {EditProfile} from '../screens/EditProfile';
import {ChangeYourPassword} from '../screens/ChangeYourPassword';

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
        name="ChangeYourPassword"
        component={ChangeYourPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
