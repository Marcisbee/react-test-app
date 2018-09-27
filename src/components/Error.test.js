import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Error } from './Error';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    errored: null,
    dismissErrorAction: jest.fn(),
  };

  const enzymeWrapper = mount(<Error {...props} />);

  return {
    props,
    enzymeWrapper,
  }
}

describe('Error', () => {
  it('should render only div container initially', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('div').html()).toBe('<div></div>');
    expect(enzymeWrapper.find('.modal').length).toBe(0);
  })

  it('should render modal if errored is set', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.setProps({ errored: {} });

    expect(enzymeWrapper.find('.modal').length).toBe(1);
  })

  it('should render error data as `string`', () => {
    const { enzymeWrapper } = setup();
    const errored = 'Foo';
    enzymeWrapper.setProps({ errored });
    expect(enzymeWrapper.find('p').text()).toBe(errored);
  })

  it('should render error data as `TypeError`', () => {
    const { enzymeWrapper } = setup();
    const errored = new TypeError('Foo');
    enzymeWrapper.setProps({ errored });
    expect(enzymeWrapper.find('p').text()).toBe('TypeError: Foo');
  })

  it('should render button with `dismissErrorAction`', () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.setProps({ errored: {} });

    const button = enzymeWrapper.find('button');
    button.props().onClick();
    expect(props.dismissErrorAction.mock.calls.length).toBe(1);
  })
})
