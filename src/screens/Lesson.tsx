import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Image, Text, VStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

const LessonScreen = ({ navigation, route }: Props) => {
  const lesson = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center flex={1}>
        <Image
          source={require('@assets/icon.png')}
          alt="Hololingo logo"
          size={32}
          mb={2}
          accessibilityRole="image"
        />
        <Text textTransform="capitalize" fontSize="4xl" fontWeight={600}>
          {lesson.title}
        </Text>
        <VStack marginY={10} space={3}>
          <Button size="md">Practicar</Button>
          <Button
            size="md"
            colorScheme="info"
            onPress={() =>
              navigation.navigate('LessonPreview', {
                video_url: lesson.example_video,
              })
            }
          >
            Ver video de práctica
          </Button>
        </VStack>
      </Center>
    </SafeAreaView>
  );
};

export default LessonScreen;
