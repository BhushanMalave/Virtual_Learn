import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {HomeSearch} from '../screens/HomeSearch';
import { CategorySearch } from '../screens/CategorySearchScreen';
import {ChoiceYourCourse} from '../screens/ChoiceYourCourse';
import {CategoryDisplayScreen} from '../screens/CategoryDisplayScreen';
import {SubCategoryDisplayScreen} from '../screens/SubCategoryDisplayScreen';
import {CourseScreen} from '../screens/CourseScreen';
import {TestStack} from './TestStack';
import {VideoPlayer} from '../components/VideoPlayer';
import {CourseComponent} from '../components/CourseComponent';
import {OnGoingComponent} from '../components/OnGoingComponent';
import {LessonVideoPlayer} from '../components/LessonVideoPlayer';
import {ContinuePopUp} from '../components/chaptes/ContinuePopUp';
import {CertificateScreen} from '../screens/CertificateScreen';
import {ModularTest} from '../components/chaptes/ModuleTest';
import {FinalTestStack} from './FinalTeststack';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="HomeSearch"
        component={HomeSearch}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
       <Stack.Screen
        name="CategorySearch"
        component={CategorySearch}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ChoiceCourse"
        component={ChoiceYourCourse}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CategoryDisplayScreen"
        component={CategoryDisplayScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SubCategoryDisplayScreen"
        component={SubCategoryDisplayScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CourseComponent"
        component={CourseComponent}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OnGoingComponent"
        component={OnGoingComponent}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="LessonVideoPlayer"
        component={LessonVideoPlayer}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="ContinuePopUp"
        component={ContinuePopUp}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="TestStack"
        component={TestStack}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="FinalTestStack"
        component={FinalTestStack}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CertificateScreen"
        component={CertificateScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="ModularTest"
        component={ModularTest}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
