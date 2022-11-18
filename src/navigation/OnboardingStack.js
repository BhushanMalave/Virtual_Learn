import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { OnBoardingScreen1 } from '../screens/OnBoardingScreen1';
import { OnBoardingScreen2 } from '../screens/OnBoardingScreen2';
import { OnBoardingScreen3 } from '../screens/OnBoardingScreen3';
import { WelcomeScreen } from '../screens/Welcome';
import { PrivacyPolicyScreen } from '../screens/PrivacyPolicyScreen';
import { TermServicesScreen } from '../screens/TermServicesScreen';
import { RegistrationStack } from './RegistrationStack';
import { LoginStack } from './LoginStack';
import { CreateNewPassword } from '../screens/CreateNewPassword';

const Stack = createNativeStackNavigator();

export const OnboardingStack = () => {
  return (
  
    <Stack.Navigator>
 
    
      <Stack.Screen
        name="OnBoardingScreen1"
        component={OnBoardingScreen1}
        options={{headerShown: false}}
      />
    
      <Stack.Screen
        name="OnBoardingScreen2"
        component={OnBoardingScreen2}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="OnBoardingScreen3"
        component={OnBoardingScreen3}
        options={{headerShown: false}}
      />
         <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={WelcomeScreen}
      /> 
     
      <Stack.Screen
        options={{headerShown: false}}
        name="TermServicesScreen"
        component={TermServicesScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
       <Stack.Screen
        options={{headerShown: false}}
        name="RegisterStack"
        component={RegistrationStack}
      />
       <Stack.Screen
        options={{headerShown: false}}
        name="LoginStack"
        component={LoginStack}
      />
    </Stack.Navigator>
  
  );
};
