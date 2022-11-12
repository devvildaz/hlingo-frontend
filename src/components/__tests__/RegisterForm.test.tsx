import React from 'react';
import renderer from 'react-test-renderer';

import RegisterForm from '@components/RegisterForm';
import Wrapper from '../ProviderWrapper';

describe('<RegisterForm />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should match the snapshot', () => {
    const component = renderer.create(
      <Wrapper>
        <RegisterForm />
      </Wrapper>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
