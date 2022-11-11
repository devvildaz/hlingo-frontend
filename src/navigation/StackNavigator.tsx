import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/HomeScreen";
import TestScreen from "@screens/TestScreen";
import { RootStackParams } from "./types";

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='TestScreen'
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='TestScreen' component={TestScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
