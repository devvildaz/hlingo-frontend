/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { ILesson } from '@src/types/lessons';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;

  BottomNavigator: undefined;
  Lesson: ILesson;
  LessonPreview: { video_url: string };
  LessonResults: {
    title: string;
    prediction_score: number;
    temp_video: string;
  };
};

export type RootBottomTabsParamList = {
  Social: undefined;
  Profile: undefined;
  Lessons: undefined;

  LessonStackNavigator: undefined;
};

export type RootLessonStackParamList = {
  Lessons: undefined;
  Lesson: ILesson;
};
