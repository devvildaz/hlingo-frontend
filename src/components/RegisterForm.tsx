import {
  Button,
  Column,
  FormControl,
  Input,
  KeyboardAvoidingView,
  WarningOutlineIcon,
} from 'native-base';
import { useForm } from 'react-hook-form';
import { registerResolver } from '@utils';
import { Controller } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: registerResolver,
    mode: 'onSubmit',
  });

  const register = (data: FormData) => {
    console.log({ data });
  };

  return (
    <KeyboardAvoidingView py={3} px={8} width="full" maxW="sm" mx="auto">
      <Column space={3}>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormControl.Label>Nombres</FormControl.Label>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                type="text"
                placeholder="Ingrese su nombre completo..."
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
            {errors.name?.message}
          </FormControl.ErrorMessage>
        </FormControl>

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

        <Button onPress={handleSubmit(register)} mt={2}>
          Registrarse
        </Button>
      </Column>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
