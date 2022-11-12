import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import StackNavigator from '@navigation/StackNavigator';
import theme from '@src/theme/index';
import { AuthProvider } from '@context/auth';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
