import React from 'react';
// import {View, Text} from 'react-native';
// // import {BottomNavigation, BottomNavigationTab, Divider} from '@ui-kitten/components';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {VideosScreen} from '../screens/VideosScreen';
// import {HomeScreen} from '../screens/HomeScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 


// const {Navigator, Screen} = createBottomTabNavigator();

// const BottomTabBar = ({navigation, state}) => (
//   <View>
//     <Text>sdf</Text>
//     {/* <BottomNavigation
//       appearance='noIndicator'
//       selectedIndex={state.index}
//       onSelect={index => navigation.navigate(state.routeNames[index])}>
//       <BottomNavigationTab title='Home' icon={MaterialCommunityIcons}/>
//       <BottomNavigationTab title='Videos' icon={MaterialCommunityIcons}/>
//     </BottomNavigation> */}
//   </View>
// );

// export const BottomTabsNavigator = () => (
//   <Navigator tabBar={props => <BottomTabBar {...props} />}>
//     <Screen name='Home' component={HomeScreen}/>
//     <Screen name='Videos' component={VideosScreen}/>
//   </Navigator>
// );


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Dashboard from '../components/Dashboard';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { COLORS } from '../constants';


const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} 
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="dashboard" size={24} color={COLORS.primary} />
        ),
      }}
      />
      <Tab.Screen name="Settings" component={Logout} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Feather name="settings" size={24} color={COLORS.primary} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}