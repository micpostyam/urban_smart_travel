/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import Activites from '../components/apps/Activites';
import Historique from '../components/apps/Historique';
import Preferences from '../components/apps/Preferences';
import Profil from '../components/apps/Profil';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Activites"
      screenOptions={{
        tabBarActiveTintColor: '#FFCC4D',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Activites"
        component={Activites}
        options={{
          tabBarLabel: 'Activites',
          tabBarIcon: ({color, size}) => (
            <FaIcons name="file-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Historique"
        component={Historique}
        options={{
          tabBarLabel: 'Historique',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Preferences"
        component={Preferences}
        options={{
          tabBarLabel: 'Preferences',
          tabBarIcon: ({color, size}) => (
            <FaIcons name="hand-point-up" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => (
            <FaIcons name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
