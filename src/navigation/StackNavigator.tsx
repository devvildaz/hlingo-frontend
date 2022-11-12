import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/Home';
import TestScreen from '@screens/Test';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/Register';
import LessonsScreen from '@screens/Lessons';
import { RootStackParams } from './types';

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="Register"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Lessons" component={LessonsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
