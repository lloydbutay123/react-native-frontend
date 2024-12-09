import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';
import HomeTopTabs from './HomeTopTabs'; // Import the top tab navigator
import Header from './Header';
import Ai from '../screens/Home/Ai';
import CommunityScreen from '../screens/Home/Community/CommunityScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;
            switch (route.name) {
              case 'Home':
                iconSource = focused
                  ? require('../../assets/images/home-02.png')
                  : require('../../assets/images/home-02-inactive.png');
                break;
              case 'Community':
                iconSource = focused
                  ? require('../../assets/images/user-group.png')
                  : require('../../assets/images/user-group-inactive.png');
                break;
              case 'Ai':
                iconSource = focused
                  ? require('../../assets/images/ai-brain-02.png')
                  : require('../../assets/images/ai-brain-02-inactive.png');
                break;
              case 'Bookmark':
                iconSource = focused
                  ? require('../../assets/images/bookmark-02(2).png')
                  : require('../../assets/images/bookmark-02(2)-inactive.png');
                break;
              case 'Profile':
                iconSource = focused
                  ? require('../../assets/images/user-sharing.png')
                  : require('../../assets/images/user-sharing-inactive.png');
                break;
            }

            return <Image source={iconSource} style={styles.icon} />;
          },
          tabBarActiveTintColor: 'rgba(255, 191, 0, 1)',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 90, // Increase height to accommodate vertical centering
            paddingBottom: 20, // Add padding at the bottom
            paddingTop: 10, // Add padding at the top
            backgroundColor: '#ffffff',
            elevation: 0, // Remove shadow for Android
            shadowOpacity: 0, // Remove shadow for iOS
            borderTopWidth: 0, // Remove the border line at the top
          },
          tabBarLabelStyle: {
            fontSize: 14,
            lineHeight: 21,
            fontFamily: 'Poppins_400Regular',
            textTransform: 'uppercase',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeTopTabs} options={{ header: () => <Header /> }} />
        <Tab.Screen name="Community" component={CommunityScreen} options={{ header: () => <Header /> }} />
        <Tab.Screen name="Ai" component={Ai} options={{ header: () => <Header /> }} />
        <Tab.Screen name="Bookmark" component={Ai} options={{ header: () => <Header /> }} />
        <Tab.Screen name="Profile" component={Ai} options={{ header: () => <Header /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24, // Set your desired width
    height: 24, // Set your desired height
    resizeMode: 'contain', // Ensure the image scales properly
  },
});
