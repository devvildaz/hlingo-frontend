import AvatarProfile from '@components/AvatarProfile';
import { screen, render } from '@config/test-utils';

describe('<AvatarProfile />', () => {
  it('should render the logo', () => {
    render(<AvatarProfile />);

    const logoImg = screen.getByRole('image');

    expect(logoImg).toBeTruthy();
  });
});
