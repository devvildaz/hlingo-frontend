import MainLogo from '@components/MainLogo';
import { screen, render } from '@config/test-utils';

describe('<MainLogo />', () => {
  it('should render the logo', () => {
    render(<MainLogo />);

    const logoText = screen.getByText('hololingo', { exact: false });
    const logoImg = screen.getByRole('image');

    expect(logoText).toBeTruthy();
    expect(logoImg).toBeTruthy();
  });

  it('should render when passed size prop', () => {
    render(<MainLogo size="sm" />);

    const logoText = screen.getByText('hololingo', { exact: false });
    const logoImg = screen.getByRole('image');

    expect(logoText).toBeTruthy();
    expect(logoImg).toBeTruthy();
  });
});
