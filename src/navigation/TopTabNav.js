import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';


import { OverviewScreen } from '../screens/OverviewScreen';
import { Chapters } from '../screens/Chapters';

const Tab = createMaterialTopTabNavigator();

const TopTabNav = () => {
  return (
 

    <Tab.Navigator screenOptions={{
   
  }}>
      <Tab.Screen name="OverviewScreen" component={OverviewScreen} />
      <Tab.Screen name="Chapters" component={Chapters} />
    </Tab.Navigator>
   
  );
};
export default TopTabNav;