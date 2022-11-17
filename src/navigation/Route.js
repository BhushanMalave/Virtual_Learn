import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default  Router = ()  => {
  return (
    <NavigationContainer><Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator></NavigationContainer>
  );
}