import { AuthContext } from '@context/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home';
import LessonsScreen from '@screens/Lessons';
import LoadingScreen from '@screens/Loading';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/Register';
import { useContext } from 'react';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      initialRouteName="Home"
    >
      {status === 'authenticated' ? (
        <>
          <Stack.Screen name="Lessons" component={LessonsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
