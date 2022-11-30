import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsScreen} from '../screens/SettingsScreen';
import {TermServicesScreen} from '../screens/TermServicesScreen';
import {PrivacyPolicyScreen} from '../screens/PrivacyPolicyScreen';
const Stack = createNativeStackNavigator();

export const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsServices"
        component={TermServicesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
