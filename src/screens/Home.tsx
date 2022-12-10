import MainLogo from '@components/MainLogo';
import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Column } from 'native-base';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Column flex={1} safeArea>
      <Box pt={8}>
        <MainLogo size="lg" />
      </Box>
      <Box flex={1} />
      <Column px={20} space={4} pb={20}>
        <Button onPress={() => navigation.push('Login')} size="lg">
          Iniciar Sesión
        </Button>
        <Button onPress={() => navigation.push('Register')} size="lg">
          Registrarse
        </Button>
      </Column>
    </Column>
  );
};

export default HomeScreen;
