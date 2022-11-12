import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/Home';
import TestScreen from '@screens/Test';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/Register';
import LessonsScreen from '@screens/Lessons';
import { RootStackParams } from './types';
import { useContext } from 'react';
import { AuthContext } from '@context/auth';
import LoadingScreen from '@screens/Loading';

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  const { status } = useContext(AuthContext);

  if (status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="Login"
    >
      {status === 'authenticated' ? (
        <>
          <Stack.Screen name="Test" component={TestScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Lessons" component={LessonsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
