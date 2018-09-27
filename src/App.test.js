import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should have button with `fetchAction`', () => {
    const props = {
      errored: null,
      loading: false,
      fetchAction: jest.fn(),
    };
    const wrapper = shallow(<App {...props} />);

    const button = wrapper.find('button');
    button.props().onClick();
    expect(props.fetchAction.mock.calls.length).toBe(1);
  })
})
