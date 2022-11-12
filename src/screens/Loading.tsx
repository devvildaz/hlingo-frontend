import { Center, Spinner } from 'native-base';

const LoadingScreen = () => {
  return (
    <Center flex={1}>
      <Spinner color="indigo.700" size="lg" />
    </Center>
  );
};

export default LoadingScreen;
