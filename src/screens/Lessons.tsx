import { AuthContext } from '@context/auth';
import { Text, Button, Center } from 'native-base';
import { useContext } from 'react';

const LessonsScreen = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <Center flex={1}>
      <Text mb={4}>Lessons Screen</Text>
      <Text fontSize="sm">{user?.id}</Text>
      <Text fontSize="lg" mb={6}>
        {user?.name}
      </Text>
      <Button onPress={() => logout()}>Cerrar Sesión</Button>
    </Center>
  );
};

export default LessonsScreen;
