import { Center, Image, Text } from 'native-base';

const sizes = {
  sm: {
    logo: '36',
    text: '3xl',
  },
  md: {
    logo: '48',
    text: '4xl',
  },
  lg: {
    logo: '64',
    text: '5xl',
  },
};

interface Props {
  size?: 'sm' | 'md' | 'lg';
}

const MainLogo = ({ size = 'md' }: Props) => {
  return (
    <Center p={4}>
      <Image
        source={require('@assets/icon.png')}
        alt="Hololingo logo"
        size={sizes[size].logo}
        mb={2}
        accessibilityRole="image"
      />
      <Text bold fontSize={sizes[size].text}>
        Hololingo
      </Text>
    </Center>
  );
};

export default MainLogo;
