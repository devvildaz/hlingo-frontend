import ProfileForm from '@components/ProfileForm';
import { screen, render, fireEvent, waitFor } from '@config/test-utils';
import { IUser } from '@src/types';

const testValues = {
  NAME: 'Miguel Angel',
  INVALID_NAME: 'a',
};

const mockUpdateProfile = jest.fn(async (data: IUser) => {
  return await Promise.resolve('Success');
});

const mockUser = {
  id: '1',
  name: '',
  email: 'miguel@gmail.com',
  score: 0,
};

describe('<ProfileForm />', () => {
  beforeEach(() => {
    render(<ProfileForm editProfile={mockUpdateProfile} user={mockUser} />);
  });

  it('should display new values when text inputs are changed', async () => {
    const nameInput = screen.getByLabelText('Nombres');

    fireEvent.changeText(nameInput, testValues.NAME);

    expect(screen.getByDisplayValue(testValues.NAME)).toBeTruthy();
  });

  it('should not display errors when values are valid', async () => {
    const nameInput = screen.getByLabelText('Nombres');

    fireEvent.changeText(nameInput, testValues.NAME);

    const submitBtn = screen.getByTestId('update-profile-button');

    fireEvent.press(submitBtn);

    const errorMessages = screen.queryAllByRole('alert');

    await waitFor(() => expect(errorMessages).toHaveLength(0));

    expect(mockUpdateProfile).not.toHaveBeenCalled();
  });
});
