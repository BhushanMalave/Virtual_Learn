import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CourseCompletedScreen} from '../screens/CourseCompletedScreen';
import {CourseScreen} from '../screens/CourseScreen';
import {FinalTest} from '../screens/FinalTest';
import {FinalCongratulationScreen} from '../screens/FinalCongratulationScreen';
import {CertificateScreen} from '../screens/CertificateScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {ModularTest} from '../components/chaptes/ModuleTest';

const Stack = createNativeStackNavigator();
export const FinalTestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FinalTest"
        component={FinalTest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FinalCongratulationScreen"
        component={FinalCongratulationScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CourseCompletedScreen"
        component={CourseCompletedScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CertificateScreen"
        component={CertificateScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ModularTest"
        component={ModularTest}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
