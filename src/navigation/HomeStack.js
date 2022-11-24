import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { HomeSearch } from '../screens/HomeSearch';
import { ChoiceYourCourse } from '../screens/ChoiceYourCourse';
import { CategoryDisplayScreen } from '../screens/CategoryDisplayScreen';
import { CourseScreen } from '../screens/CourseScreen';
import { VideoPlayer } from '../components/VideoPlayer';
import { CourseComponent } from '../components/CourseComponent';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
 
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeSearch"
        component={HomeSearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChoiceCourse"
        component={ChoiceYourCourse}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryDisplayScreen"
        component={CategoryDisplayScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CourseComponent"
        component={CourseComponent}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
   
 
  );
};