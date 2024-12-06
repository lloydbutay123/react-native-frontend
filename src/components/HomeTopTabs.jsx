import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PublicService from '../screens/Home/PublicService/PublicServiceScreen';
import News from '../screens/Home/News/NewsScreen';
import Ecommerce from '../screens/Home/Ecommerce/EcommerceScreen';
import CustomTabBar from './CustomTabBar'; // Import the custom tab bar

const TopTab = createMaterialTopTabNavigator();

export default function HomeTopTabs() {
  return (
    <TopTab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />} // Use the custom tab bar
    >
      <TopTab.Screen name="Public Service" component={PublicService} />
      <TopTab.Screen name="News" component={News} />
      <TopTab.Screen name="E-Commerce" component={Ecommerce} />
    </TopTab.Navigator>
  );
}
