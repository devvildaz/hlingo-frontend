import React from 'react';
import renderer from 'react-test-renderer';

import MainLogo from '@components/MainLogo';
import Wrapper from '../ProviderWrapper';

describe('<MainLogo />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should match the snapshot', () => {
    const component = renderer.create(
      <Wrapper>
        <MainLogo />
      </Wrapper>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
