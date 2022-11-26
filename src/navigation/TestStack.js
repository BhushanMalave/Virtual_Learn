import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Test } from '../screens/Test';
import { CongratulationScreen } from '../screens/CongratulationScreen';



const Stack = createNativeStackNavigator();
export const TestStack = () => {
    return (


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
      </Stack.Navigator>

   
   
    );
  };