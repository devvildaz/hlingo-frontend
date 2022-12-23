import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PredictionsResp } from '@src/types';
import { holoPredictionApi } from '@utils';
import * as DocumentPicker from 'expo-document-picker';
import { launchCameraAsync, MediaTypeOptions } from 'expo-image-picker';
import { Button, Center, Image, Text, VStack } from 'native-base';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

const LessonScreen = ({ navigation, route }: Props) => {
  const lesson = route.params;

  const [isLoading, setIsLoading] = useState(false);

  const sendExampleVideo = async () => {
    setIsLoading(true);
    const video = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: '*/*',
    });

    if (video.type !== 'success') {
      setIsLoading(false);
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

      const response = await holoPredictionApi.post<PredictionsResp>(
        '/predict/video',
        form
      );

      navigation.navigate('LessonResults', {
        prediction_score: response.data.predictions[0][lesson.description],
        temp_video: video.uri,
        title: lesson.title,
      });
    } catch (error) {
      console.log(JSON.stringify({ error }, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  const practice = () => {
    void launchCameraAsync({
      mediaTypes: MediaTypeOptions.Videos,
      quality: 0.8,
    }).then(res => {
      if (res.canceled ?? false) return;

      console.log({ res });
    });
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
          <Button size="md" onPress={practice} isDisabled={isLoading}>
            Practicar
          </Button>

          <Button
            size="md"
            colorScheme="info"
            onPress={() =>
              navigation.navigate('LessonPreview', {
                video_url: lesson.example_video,
              })
            }
            isDisabled={isLoading}
          >
            Ver video de práctica
          </Button>

          <Button
            size="sm"
            colorScheme="text"
            marginTop={4}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onPress={sendExampleVideo}
            isDisabled={isLoading}
          >
            Enviar video de ejemplo
          </Button>

          {isLoading && <Text textAlign="center">Evaluando...</Text>}
        </VStack>
      </Center>
    </SafeAreaView>
  );
};

export default LessonScreen;
