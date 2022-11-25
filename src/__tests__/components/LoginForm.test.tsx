import LoginForm from '@components/LoginForm';
import { screen, render, fireEvent, waitFor } from '@config/test-utils';

const testValues = {
  EMAIL: 'miguel@gmail.com',
  PASSWORD: 'altacontra',
  INVALID_EMAIL: 'test-email',
  INVALID_PASSWORD: 'test',
};

const mockLogin = jest.fn(async (data: { email: string; password: string }) => {
  return await Promise.resolve('Success');
});

describe('<LoginForm />', () => {
  beforeEach(() => {
    render(<LoginForm login={mockLogin} />);
  });

  it('should display errors when value is invalid', async () => {
    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(2);

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('should display new values when text inputs are changed', async () => {
    const emailInput = screen.getByLabelText('Correo electrónico');
    const passwordInput = screen.getByLabelText('Contraseña');

    fireEvent.changeText(emailInput, testValues.EMAIL);
    fireEvent.changeText(passwordInput, testValues.PASSWORD);

    expect(screen.getByDisplayValue(testValues.EMAIL)).toBeTruthy();
    expect(screen.getByDisplayValue(testValues.PASSWORD)).toBeTruthy();
  });

  it("should display error when email doesn't have valid format", async () => {
    const emailInput = screen.getByLabelText('Correo electrónico');
    const passwordInput = screen.getByLabelText('Contraseña');

    fireEvent.changeText(emailInput, testValues.INVALID_EMAIL);
    fireEvent.changeText(passwordInput, testValues.PASSWORD);

    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(1);
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('should display error when password is invalid', async () => {
    const emailInput = screen.getByLabelText('Correo electrónico');
    const passwordInput = screen.getByLabelText('Contraseña');

    fireEvent.changeText(emailInput, testValues.EMAIL);
    fireEvent.changeText(passwordInput, testValues.INVALID_PASSWORD);

    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(1);
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('should not display errors when values are valid', async () => {
    const emailInput = screen.getByLabelText('Correo electrónico');
    const passwordInput = screen.getByLabelText('Contraseña');

    fireEvent.changeText(emailInput, testValues.EMAIL);
    fireEvent.changeText(passwordInput, testValues.PASSWORD);

    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = screen.queryAllByRole('alert');

    await waitFor(() => expect(errorMessages).toHaveLength(0));

    expect(mockLogin).toHaveBeenCalledWith({
      email: testValues.EMAIL,
      password: testValues.PASSWORD,
    });
  });
});
