import { useContext } from 'react';
import { Box, Column, ScrollView } from 'native-base';

import { AuthContext } from '@context/auth';
import MainLogo from '@components/MainLogo';
import RegisterForm from '@components/RegisterForm';

const RegisterScreen = () => {
  const { register } = useContext(AuthContext);

  return (
    <ScrollView flex={1}>
      <Column flex={1} safeArea>
        <Box pt={8}>
          <MainLogo />
        </Box>

        <RegisterForm register={register} />
      </Column>
    </ScrollView>
  );
};

export default RegisterScreen;
