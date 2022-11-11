import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import StackNavigator from "@navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
