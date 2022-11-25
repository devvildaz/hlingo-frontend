import MainLogo from '@components/MainLogo';
import RegisterForm from '@components/RegisterForm';
import { AuthContext } from '@context/auth';
import { RootStackParamList } from '@navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Column, ScrollView } from 'native-base';
import { useContext } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  const { register } = useContext(AuthContext);

  return (
    <ScrollView flex={1}>
      <Column flex={1} safeArea>
        <Box pt={8}>
          <MainLogo />
        </Box>

        <RegisterForm
          register={register}
          redirectTo={() => navigation.replace('Login')}
        />
      </Column>
    </ScrollView>
  );
};

export default RegisterScreen;
