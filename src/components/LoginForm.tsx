import {
  Button,
  Column,
  FormControl,
  Input,
  KeyboardAvoidingView,
  WarningOutlineIcon,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import { loginResolver } from '@utils';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: loginResolver,
    mode: 'onSubmit',
  });

  const login = (data: FormData) => {
    console.log({ data });
  };

  return (
    <KeyboardAvoidingView py={10} px={8} width="full" maxW="sm" mx="auto">
      <Column space={3}>
        {/* Email */}
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormControl.Label>Correo electrónico</FormControl.Label>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                type="email"
                placeholder="Ingrese su correo..."
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
            {errors.email?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        {/* Password */}
        <FormControl isInvalid={Boolean(errors.password)}>
          <FormControl.Label>Contraseña</FormControl.Label>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                type="password"
                placeholder="*************"
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
            {errors.password?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        <Button onPress={handleSubmit(login)} mt={2}>
          Iniciar Sesión
        </Button>
      </Column>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
