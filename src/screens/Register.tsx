import {
  Box,
  Button,
  Column,
  FormControl,
  Input,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base';

import MainLogo from '@components/MainLogo';

const RegisterScreen = () => {
  return (
    <ScrollView flex={1}>
      <Column flex={1} safeArea>
        <Box pt={8}>
          <MainLogo />
        </Box>

        {/* Register Form */}
        <KeyboardAvoidingView py={10} px={8} width="full" maxW="sm" mx="auto">
          <Column space={3}>
            <FormControl isInvalid={false}>
              <FormControl.Label>Nombres</FormControl.Label>
              <Input type="text" placeholder="Ingrese su nombre completo..." />
              <FormControl.ErrorMessage>TODO</FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormControl.Label>Correo electrónico</FormControl.Label>
              <Input type="email" placeholder="Ingrese su coreo..." />
              <FormControl.ErrorMessage>TODO</FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" placeholder="*************" />
              <FormControl.ErrorMessage>TODO</FormControl.ErrorMessage>
            </FormControl>
            <Button mt={3}>Registrarse</Button>
          </Column>
        </KeyboardAvoidingView>
      </Column>
    </ScrollView>
  );
};

export default RegisterScreen;
