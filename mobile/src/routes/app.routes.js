import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import About from '~/pages/About';
import DispenserDetails from '~/pages/DispenserDetails';
import List from '~/pages/List';
import Map from '~/pages/Map';
import Scanner from '~/pages/Scanner';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0279DB',
        inactiveTintColor: '#999',
        labelStyle: {
          fontFamily: 'Comfortaa',
        },
      }}>
      <Tab.Screen
        name="List"
        options={{
          title: 'Listagem',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={20} color={color} />
          ),
        }}
        component={List}
      />
      <Tab.Screen
        name="Map"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map" size={20} color={color} />
          ),
        }}
        component={Map}
      />
      <Tab.Screen
        name="Scanner"
        options={{
          title: 'Reposição',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="box-open" size={20} color={color} />
          ),
        }}
        component={Scanner}
      />
      <Tab.Screen
        name="About"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="info-circle" size={20} color={color} />
          ),
        }}
        component={About}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
