import AvatarProfile from '@components/AvatarProfile';
import ProfileForm from '@components/ProfileForm';
import { AuthContext } from '@context/auth';
import { Center } from 'native-base';
import { useContext } from 'react';

const ProfileScreen = () => {
  const { updateProfile, user } = useContext(AuthContext);

  return (
    <Center flex={1}>
      <AvatarProfile />
      <ProfileForm editProfile={updateProfile} user={user} />
    </Center>
  );
};

export default ProfileScreen;
