import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from '@components/LoginForm';
import Wrapper from '../ProviderWrapper';

describe('<LoginForm />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should match the snapshot', () => {
    const component = renderer.create(
      <Wrapper>
        <LoginForm />
      </Wrapper>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
