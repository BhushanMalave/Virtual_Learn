import * as React from 'react';
import {MyProfile} from '../screens/MyProfile';
import {EditProfile} from '../screens/EditProfile';
import {ChangeYourPassword} from '../screens/ChangeYourPassword';

import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={MyProfile}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ChangeYourPassword"
        component={ChangeYourPassword}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
