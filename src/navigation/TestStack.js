import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Test} from '../screens/Test';
import {CongratulationScreen} from '../screens/CongratulationScreen';
import {MockTestResultScreen} from '../screens/MockTestResultScreen';
import {CourseCompletedScreen} from '../screens/CourseCompletedScreen';
import { ChaptersScreen } from '../screens/ChaptersScreen';
import { CourseScreen } from '../screens/CourseScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export const TestStack = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Test"
          component={Test}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CongratulationScreen"
          component={CongratulationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MockTestResultScreen"
          component={MockTestResultScreen}
          options={{headerShown: false}}
        />
  
        <Stack.Screen
          name="CourseCompletedScreen"
          component={CourseCompletedScreen}
          options={{headerShown: false}}
        />
  
  <Stack.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
};
