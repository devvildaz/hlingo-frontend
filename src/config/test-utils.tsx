import { AuthProvider } from '@context/auth';
import { NavigationContainer } from '@react-navigation/native';
import theme from '@src/theme';
import { render, RenderOptions } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { FC, ReactElement } from 'react';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
        <AuthProvider>{children}</AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
