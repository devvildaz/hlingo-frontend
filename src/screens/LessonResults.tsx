import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ResizeMode, Video } from 'expo-av';
import { Center, Text } from 'native-base';

type Props = NativeStackScreenProps<RootStackParamList, 'LessonResults'>;

const LessonResultsScreen = ({ navigation, route }: Props) => {
  const {
    prediction_score: predictionScore,
    temp_video: video,
    title,
  } = route.params;

  console.log({ video });

  return (
    <Center flex={1}>
      <Text fontSize="2xl" fontWeight={700} marginBottom={5}>
        Resultados de la lección
      </Text>
      <Text fontSize="lg" textTransform="capitalize" marginBottom={4}>
        {title}
      </Text>
      <Text color="amber.500" marginBottom={4}>
        Puntaje {(predictionScore * 100).toFixed(2)}
      </Text>
      <Video
        source={{ uri: video }}
        style={{
          width: '100%',
          minHeight: 250,
        }}
        isLooping
        resizeMode={ResizeMode.CONTAIN}
        isMuted
        shouldPlay
      />
    </Center>
  );
};

export default LessonResultsScreen;
