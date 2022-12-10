import LoginForm from '@components/LoginForm';
import MainLogo from '@components/MainLogo';
import { AuthContext } from '@context/auth';
import { Box, Column, ScrollView } from 'native-base';
import { useContext } from 'react';

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
