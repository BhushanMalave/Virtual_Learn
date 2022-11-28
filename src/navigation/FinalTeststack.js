import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Test} from '../screens/Test';
import {CongratulationScreen} from '../screens/CongratulationScreen';
import {MockTestResultScreen} from '../screens/MockTestResultScreen';
import {CourseCompletedScreen} from '../screens/CourseCompletedScreen';
import { ChaptersScreen } from '../screens/ChaptersScreen';
import { CourseScreen } from '../screens/CourseScreen';
import {FinalTest} from '../screens/FinalTest'
import { NavigationContainer } from '@react-navigation/native';
import {FinalCongratulationScreen} from '../screens/FinalCongratulationScreen'
import { CertificateScreen } from '../screens/CertificateScreen';

const Stack = createNativeStackNavigator();
export const FinalTestStack = () => {
  return (

    <NavigationContainer>

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
      </Stack.Navigator>
    
    </NavigationContainer>
  );
};
