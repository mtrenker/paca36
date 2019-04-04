import * as React from 'react';
import { shallow } from "enzyme";

import { Gallery } from './Gallery';

describe('Gallery', () => {
  it('Exists', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.text()).toBe('Gallery');
  })
})
