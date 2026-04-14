import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExploreScreen from '../screens/common/ExploreScreen';
import HomeScreen from '../screens/common/HomeScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
    </Tab.Navigator>
  );
}

