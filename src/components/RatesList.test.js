import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatesList from './RatesList';

Enzyme.configure({ adapter: new Adapter() });

describe('RatesList', () => {
  it('should render only tbody container initially', () => {
    const wrapper = shallow(<RatesList />);

    expect(wrapper.find('tbody').html()).toBe('<tbody></tbody>');
    expect(wrapper.find('tr').length).toBe(0);
  })

  it('should render 1 tr line', () => {
    const wrapper = shallow(<RatesList />);
    wrapper.setProps({
      rates: {
        foo: 123.456,
      }
    });

    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('td').first().text()).toBe('foo');
    expect(wrapper.find('td').last().text()).toBe('123.46');
  })

  it('should render n tr lines', () => {
    const wrapper = shallow(<RatesList />);
    wrapper.setProps({
      rates: {
        foo: 1,
        bar: 2,
        baz: 3,
      }
    });

    expect(wrapper.find('tr').length).toBe(3);
  })
})
