import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Video } from 'expo-av';
import { ResizeMode } from 'expo-av/build/Video.types';
import { Button, Center, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'LessonPreview'>;

const LessonPreviewScreen = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center flex={1}>
        <Text fontSize="2xl">Video de ejemplo</Text>
        <Video
          source={require(`@assets/videos/neighbour-signer1-1.mp4`)}
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
