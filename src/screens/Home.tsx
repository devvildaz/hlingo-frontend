import MainLogo from '@components/MainLogo';
import { Box, Button, Column } from 'native-base';

const HomeScreen = () => {
  return (
    <Column flex={1} safeArea>
      <Box pt={8}>
        <MainLogo size="lg" />
      </Box>
      <Box flex={1} />
      <Column px={20} space={4} pb={20}>
        <Button size="lg" bgColor="indigo.800">
          Iniciar Sesión
        </Button>
        <Button size="lg" bgColor="indigo.800">
          Registrarse
        </Button>
      </Column>
    </Column>
  );
};

export default HomeScreen;
