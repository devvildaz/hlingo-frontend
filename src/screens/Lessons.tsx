import { AuthContext } from '@context/auth';
import { Text, Button, Center } from 'native-base';
import { useContext } from 'react';

const LessonsScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Center flex={1}>
      <Text mb={6}>Lessons Screen</Text>
      <Button onPress={() => logout()}>Cerrar Sesión</Button>
    </Center>
  );
};

export default LessonsScreen;
