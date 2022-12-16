import { AuthContext } from '@context/auth';
import { IUser } from '@src/types/auth';
import {
  Button,
  Column,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Text,
  useToast,
  WarningOutlineIcon,
} from 'native-base';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface Props {
  editProfile: (data: IUser) => Promise<string>;
}

const ProfileForm = ({ editProfile }: Props) => {
  const [isEditting, setIsEditting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const toast = useToast();
  const {control, formState: {errors}, handleSubmit} = useForm<IUser>({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      score: user?.score,
    }}); // prettier-ignore

  const onSubmit = async (data: IUser) => {
    setIsLoading(true);
    try {
      await editProfile(data);
      toast.show({
        title: 'Perfil actualizado correctamente',
        placement: 'bottom',
        bgColor: 'success.400',
        duration: 2000,
      });
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
    <KeyboardAvoidingView py={2} px={8} width="full" maxW="sm" mx="auto">
      <Column alignItems="center" marginBottom={3}>
        <Text fontSize={18} fontWeight={500} textTransform="capitalize">
          {user?.name}
        </Text>
        <Text color="amber.500" fontSize={16}>
          {user?.score}
        </Text>
      </Column>
      <Column alignItems="center" space={3}>
        <Button
          paddingRight={8}
          paddingLeft={8}
          colorScheme="coolGray"
          size="sm"
          isDisabled={isEditting}
          onPress={() => setIsEditting(true)}
        >
          Editar
        </Button>

        <FormControl isInvalid={Boolean(errors.name)} isDisabled={!isEditting}>
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
        <FormControl isInvalid={Boolean(errors.email)} isDisabled={true}>
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

        <Button
          mt={2}
          accessibilityRole="button"
          paddingRight={8}
          paddingLeft={8}
          isDisabled={!isEditting}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        >
          Actualizar
        </Button>
      </Column>
    </KeyboardAvoidingView>
  );
};

export default ProfileForm;
