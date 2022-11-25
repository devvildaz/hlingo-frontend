import { registerResolver } from '@utils';
import {
  Button,
  Column,
  FormControl,
  Input,
  KeyboardAvoidingView,
  useToast,
  WarningOutlineIcon,
} from 'native-base';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface Props {
  register: (data: FormData) => Promise<string>;
  redirectTo: () => void;
}

const RegisterForm = ({ register, redirectTo }: Props) => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: registerResolver,
    mode: 'onSubmit',
  }); // prettier-ignore

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await register(data);
      toast.show({
        title: 'Registrado correctamente',
        placement: 'bottom',
        bgColor: 'success.400',
        duration: 2000,
      });
      redirectTo();
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Algo salió mal',
        placement: 'bottom',
        bgColor: 'error.600',
        color: 'white',
      });
    } finally {
      setIsLoading(false);
    }
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
                accessibilityLabel="Nombres"
              />
            )}
          />

          {errors.name != null && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon />}
              accessibilityRole="alert"
            >
              {errors.name.message}
            </FormControl.ErrorMessage>
          )}
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
                type="text"
                keyboardType="email-address"
                placeholder="Ingrese su correo..."
                accessibilityLabel="Correo electrónico"
              />
            )}
          />
          {errors.email != null && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon />}
              accessibilityRole="alert"
            >
              {errors.email.message}
            </FormControl.ErrorMessage>
          )}
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
                placeholder="Ingrese su contraseña..."
                accessibilityLabel="Contraseña"
              />
            )}
          />
          {errors.password != null && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon />}
              accessibilityRole="alert"
            >
              {errors.password.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <Button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={handleSubmit(onSubmit)}
          mt={2}
          isLoading={isLoading}
          accessibilityRole="button"
        >
          Registrarse
        </Button>
      </Column>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
