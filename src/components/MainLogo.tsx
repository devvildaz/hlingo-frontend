import { Center, Image, Text } from 'native-base';

const MainLogo = () => {
  return (
    <Center p={4}>
      <Image
        source={require('@assets/icon.png')}
        alt="Hololingo logo"
        size="72"
        mb={2}
      />
      <Text bold fontSize="5xl">
        Hololingo
      </Text>
    </Center>
  );
};

export default MainLogo;
