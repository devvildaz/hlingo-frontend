import { Box, Column, ScrollView } from 'native-base';

import MainLogo from '@components/MainLogo';
import RegisterForm from '@components/RegisterForm';

const RegisterScreen = () => {
  return (
    <ScrollView flex={1}>
      <Column flex={1} safeArea>
        <Box pt={8}>
          <MainLogo />
        </Box>

        <RegisterForm />
      </Column>
    </ScrollView>
  );
};

export default RegisterScreen;
