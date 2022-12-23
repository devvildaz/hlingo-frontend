import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Video } from 'expo-av';
import { ResizeMode } from 'expo-av/build/Video.types';
import { Button, Center, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'LessonPreview'>;

const videos: Record<string, any> = {
  'person-signer1-1': require('@assets/videos/person-signer1-1.mp4'),
  'good_evening-signer1-1': require('@assets/videos/good_evening-signer1-1.mp4'),
  'good_morning-signer1-1': require('@assets/videos/good_morning-signer1-1.mp4'),
  'mom-signer1-1': require('@assets/videos/mom-signer1-1.mp4'),
  'neighbour-signer1-1': require('@assets/videos/neighbour-signer1-1.mp4'),
};

const LessonPreviewScreen = ({ navigation, route }: Props) => {
  const { video_url: videoURL } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center flex={1}>
        <Text fontSize="2xl">Video de ejemplo</Text>
        <Video
          source={videos[videoURL]}
          style={{
            width: '100%',
            minHeight: 450,
          }}
          isLooping
          resizeMode={ResizeMode.CONTAIN}
          isMuted
          shouldPlay
        />
        <Button marginY={2} onPress={() => navigation.pop()}>
          Volver
        </Button>
      </Center>
    </SafeAreaView>
  );
};

export default LessonPreviewScreen;
