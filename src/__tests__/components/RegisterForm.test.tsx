import RegisterForm from '@components/RegisterForm';
import { screen, render, fireEvent, waitFor } from '@config/test-utils';

const testValues = {
  NAME: 'Miguel Rodriguez',
  EMAIL: 'miguel@gmail.com',
  PASSWORD: 'altacontra',
  INVALID_NAME: 'L',
  INVALID_EMAIL: 'test-email',
  INVALID_PASSWORD: 'test',
};

const mockRegister = jest.fn(
  async (data: { name: string; email: string; password: string }) => {
    return await Promise.resolve('Success');
  }
);

const mockRedirectTo = jest.fn(() => {});

describe('<RegisterForm />', () => {
  const changeInputValues = (name: string, email: string, password: string) => {
    const nameInput = screen.getByLabelText('Nombres');
    const emailInput = screen.getByLabelText('Correo electrónico');
    const passwordInput = screen.getByLabelText('Contraseña');

    fireEvent.changeText(nameInput, name);
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);
  };

  beforeEach(() => {
    render(
      <RegisterForm register={mockRegister} redirectTo={mockRedirectTo} />
    );
  });

  it('should display errors when value is invalid', async () => {
    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(3);

    expect(mockRegister).not.toHaveBeenCalled();
  });

  it('should display new values when text inputs are changed', async () => {
    changeInputValues(testValues.NAME, testValues.EMAIL, testValues.PASSWORD);

    expect(screen.getByDisplayValue(testValues.NAME)).toBeTruthy();
    expect(screen.getByDisplayValue(testValues.EMAIL)).toBeTruthy();
    expect(screen.getByDisplayValue(testValues.PASSWORD)).toBeTruthy();
  });

  it("should display error when name doesn't have valid format", async () => {
    changeInputValues(
      testValues.INVALID_NAME,
      testValues.EMAIL,
      testValues.PASSWORD
    );

    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(1);
    expect(mockRegister).not.toHaveBeenCalled();
  });

  it("should display error when email doesn't have valid format", async () => {
    changeInputValues(
      testValues.NAME,
      testValues.INVALID_EMAIL,
      testValues.PASSWORD
    );

    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(1);
    expect(mockRegister).not.toHaveBeenCalled();
  });

  it("should display error when password isn't valid", async () => {
    changeInputValues(
      testValues.NAME,
      testValues.EMAIL,
      testValues.INVALID_PASSWORD
    );

    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(1);
    expect(mockRegister).not.toHaveBeenCalled();
  });

  it('should not display errors when values are valid', async () => {
    changeInputValues(testValues.NAME, testValues.EMAIL, testValues.PASSWORD);

    const submitBtn = screen.getByRole('button');

    fireEvent.press(submitBtn);

    const errorMessages = screen.queryAllByRole('alert');

    await waitFor(() => expect(errorMessages).toHaveLength(0));

    expect(mockRegister).toHaveBeenCalledWith({
      name: testValues.NAME,
      email: testValues.EMAIL,
      password: testValues.PASSWORD,
    });
  });
});
