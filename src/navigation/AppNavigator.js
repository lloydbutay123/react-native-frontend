import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import Header from '../components/Header';
import Landing from '../screens/Home/LandingScreen';
import PublicService from '../screens/Home/PublicService/PublicServiceScreen';
import News from '../screens/Home/News/NewsScreen';
import Ecommerce from '../screens/Home/Ecommerce/EcommerceScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
        animation: 'none',
      }}>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen}
      />
      <Stack.Screen 
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='PublicService'
        component={PublicService}
      />
      <Stack.Screen 
        name='News'
        component={News}
      />
      <Stack.Screen 
        name='Ecommerce'
        component={Ecommerce}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
