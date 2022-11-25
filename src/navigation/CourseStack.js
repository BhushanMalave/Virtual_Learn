import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MyCourse } from '../screens/MyCourse';


const Stack = createNativeStackNavigator();

export const CourseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyCourse"
        component={MyCourse}
        options={{headerShown: false}}
      />
    
     
    </Stack.Navigator>
 
  );
};