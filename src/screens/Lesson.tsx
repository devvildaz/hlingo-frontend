import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { holoPredictionApi } from '@utils';
import * as DocumentPicker from 'expo-document-picker';
import { Button, Center, Image, Text, VStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

const LessonScreen = ({ navigation, route }: Props) => {
  const lesson = route.params;

  const sendExampleVideo = async () => {
    const video = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: '*/*',
    });

    if (video.type !== 'success') {
      return;
    }

    try {
      const fileToUpload = {
        uri: video.uri,
        type: 'video/mp4',
        name: video.name,
      };

      const form = new FormData();
      form.append('video', fileToUpload as any);

      const response = await holoPredictionApi.post('/predict/video', form);

      console.log(JSON.stringify({ response }, null, 2));
    } catch (error) {
      console.log(JSON.stringify({ error }, null, 2));
    }
  };

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
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <Button size="md" onPress={sendExampleVideo}>
            Enviar video de ejemplo
          </Button>
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
