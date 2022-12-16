import { Image, View } from 'native-base';

const AvatarProfile = () => {
  return (
    <View>
      <Image
        source={require('@assets/user.png')}
        alt="Hololingo logo"
        size={24}
        mb={2}
        accessibilityRole="image"
      />
    </View>
  );
};

export default AvatarProfile;
