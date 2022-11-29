import React from 'react';

import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import {CourseStack} from './CourseStack';
import {HomeStack} from './HomeStack';
import {ProfileStack} from './ProfileStack';
import {SettingStack} from './SettingStack';
import {NotificationsScreen} from '../screens/NotificationsScreen';
import {CustomDrawerComponent} from '../components/CustomDrawerComponents';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

export const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width / 1.25,
        },
      }}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerStyle: {
            height: 80,
          },
          headerShown: false,
          drawerIcon: ({color}) => <Icon name="home" size={20} color={color} />,
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      <Drawer.Screen
        name="My Course"
        component={CourseStack}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icon name="shopping-bag" size={18} color={color} />
          ),
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => <Icon name="user" size={18} color={color} />,
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => <Icon name="bell" size={18} color={color} />,
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStack}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icon name="settings" size={18} color={color} />
          ),
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
    </Drawer.Navigator>
  );
};
