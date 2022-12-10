import { Box, HStack, StatusBar, Text } from 'native-base';

import { IUser } from '../types/auth';

interface Props {
  user: IUser | null;
}

const HomeAppBar = ({ user }: Props) => {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="primary" />
      <HStack
        bg="violet.800"
        p={3}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center" flex={1} justifyContent="space-between">
          <Text color="white" fontSize="20" fontWeight="bold">
            Hololingo
          </Text>
          <HStack alignItems="center">
            <Text textTransform="capitalize" color="violet.200" fontSize="14">
              {user?.name}
            </Text>
            <Text textTransform="capitalize" color="violet.500" fontSize="20">
              {' | '}
            </Text>
            <Text color="amber.300" fontSize="16" fontWeight="medium">
              {user?.score}
            </Text>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};

export default HomeAppBar;
