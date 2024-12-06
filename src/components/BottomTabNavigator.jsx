import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeTopTabs from './HomeTopTabs'; // Import the top tab navigator
import Header from './Header';
import Ai from '../screens/Home/Ai';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Community') {
              iconName = 'people-outline';
            } else if (route.name === 'Ai') {
              iconName = 'newspaper-outline';
            } else if (route.name === 'Ecommerce') {
              iconName = 'cart-outline';
            } else if (route.name === 'Profile') {
              iconName = 'analytics-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'navy',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeTopTabs} // Use the top tab navigator
          options={{ header: () => <Header /> }}
        />
        <Tab.Screen name="Community" component={Ai} options={{ header: () => <Header /> }} />
        <Tab.Screen name="Ai" component={Ai} options={{ header: () => <Header /> }} />
        <Tab.Screen name="Ecommerce" component={Ai} options={{ header: () => <Header /> }} />
        <Tab.Screen name="Profile" component={Ai} options={{ header: () => <Header /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
