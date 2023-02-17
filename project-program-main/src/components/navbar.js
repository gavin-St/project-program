import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Test1 } from "./building-list";
import { Test2 } from "./home-page";

const Tab=createMaterialTopTabNavigator();
const iconSize=22;

export default function NavBar() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                tabBarPosition="bottom"
                screenOptions={{
                  swipeEnabled: true,
                  tabBarShowLabel: false,
                  tabBarIndicatorStyle: {
                    position: 'absolute',
                    top: 0,
                    height: 3,
                    backgroundColor: '#ffd500',
                  },
                  tabBarStyle: { backgroundColor: '#000000' },
                  tabBarActiveTintColor: '#ffd500',
                  tabBarInactiveTintColor: '#FFFFFF'
                }}
            >
                
                <Tab.Screen 
                    name="Home" 
                    component={ Test1 } 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="home" color={color} size={iconSize} />
                        )
                    }}
                />

                <Tab.Screen 
                    name="Profile" 
                    component={ Test2 } 
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="account" color={color} size={iconSize} />
                        )
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
