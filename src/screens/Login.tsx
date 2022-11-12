import { Box, Column, ScrollView } from 'native-base';

import MainLogo from '@components/MainLogo';
import LoginForm from '@components/LoginForm';

const LoginScreen = () => {
  return (
    <ScrollView flex={1}>
      <Column flex={1} safeArea>
        <Box pt={8}>
          <MainLogo />
        </Box>

        <LoginForm />
      </Column>
    </ScrollView>
  );
};

export default LoginScreen;
