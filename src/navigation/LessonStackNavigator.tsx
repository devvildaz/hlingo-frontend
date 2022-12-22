import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LessonScreen from '@screens/Lesson';
import LessonsScreen from '@screens/Lessons';

import { RootLessonStackParamList } from './types';

const Stack = createNativeStackNavigator<RootLessonStackParamList>();

const LessonStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="Lessons"
    >
      <Stack.Screen name="Lessons" component={LessonsScreen} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
    </Stack.Navigator>
  );
};

export default LessonStackNavigator;
