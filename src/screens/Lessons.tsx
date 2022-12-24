import { RootLessonStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ICategoryOfLessons, ILessonRes } from '@src/types';
import { holoApi } from '@utils';
import { ScrollView, useToast } from 'native-base';
import { useEffect, useState } from 'react';
import { List } from 'react-native-paper';

type Props = NativeStackScreenProps<RootLessonStackParamList, 'Lessons'>;

const LessonsScreen = ({ navigation }: Props) => {
  const [lessons, setLessons] = useState<ICategoryOfLessons[]>([]);
  const toast = useToast();

  useEffect(() => {
    const getLessons = async () => {
      try {
        const res = await holoApi.get<ILessonRes[]>('/lessons');

        // get categories from lessons
        const categories: string[] = [
          ...new Set(res.data.map(lesson => lesson.category_name)),
        ];

        // group lessons by category
        const lessonsByCategory: ICategoryOfLessons[] = categories.map(
          category => {
            return {
              title: category,
              lessons: res.data.filter(
                lesson => lesson.category_name === category
              ),
            };
          }
        );

        setLessons(lessonsByCategory);
      } catch (error) {
        console.log(error);
        toast.show({
          title: 'Error',
          description: 'No se pudo obtener las lecciones',
        });
      }
    };

    void getLessons();
  }, []);

  return (
    <ScrollView>
      <List.Section style={{ marginVertical: 0 }}>
        {lessons.map(category => (
          <List.Accordion title={category.title} key={category.title}>
            {category.lessons.map(lesson => (
              <List.Item
                title={lesson.title}
                key={lesson._id.$oid}
                onPress={() => navigation.navigate('Lesson', lesson)}
              />
            ))}
          </List.Accordion>
        ))}
      </List.Section>
    </ScrollView>
  );
};

export default LessonsScreen;
