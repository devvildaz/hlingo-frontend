import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LessonsScreen from '@screens/Lessons';
import ProfileScreen from '@screens/Profile';
import SocialScreen from '@screens/Social';

import { RootBottomTabsParamList } from './types';

const Tab = createMaterialBottomTabNavigator<RootBottomTabsParamList>();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      compact
      shifting
      activeColor="#5046e2"
      inactiveColor="#979797"
      barStyle={{
        backgroundColor: '#f1f1f1',
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
        paddingVertical: 0,
      }}
    >
      <Tab.Screen
        name="Lessons"
        options={{
          tabBarLabel: 'Lecciones',
          tabBarIcon: ({ color }) => (
            <Ionicons name="book-outline" size={24} color={color} />
          ),
        }}
        component={LessonsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Social',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ),
        }}
        name="Social"
        component={SocialScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
