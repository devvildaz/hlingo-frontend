import { useContext } from 'react';
import { Box, Column, ScrollView } from 'native-base';

import { AuthContext } from '@context/auth';
import MainLogo from '@components/MainLogo';
import LoginForm from '@components/LoginForm';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  return (
    <ScrollView flex={1}>
      <Column flex={1} safeArea>
        <Box pt={8}>
          <MainLogo />
        </Box>

        <LoginForm login={login} />
      </Column>
    </ScrollView>
  );
};

export default LoginScreen;
