import * as React from 'react';
import { mount } from "enzyme";

import { Gallery, Slider, ISlider, Modal } from './Gallery';

describe('Gallery', () => {
  it('displays a Gallery with 3 Images', () => {
    const images = [{
      src: 'https://source.unsplash.com/800x600/?alpaca'
    },{
      src: 'https://source.unsplash.com/800x600/?alpaca'
    },{
      src: 'https://source.unsplash.com/800x600/?alpaca'
    }];
    const wrapper = mount(<Gallery images={images} />);
    expect(wrapper.find('img').length).toBe(3);
  })

  it('displays the Slider', () => {
    const sliderProps: ISlider = {
      image: 'https://source.unsplash.com/800x600/?alpaca',
      currentIndex: 1,
      imageCount: 10,
    };
    const wrapper = mount(<Slider {...sliderProps} />);
    expect(wrapper.find('p').text()).toBe('2 / 10');
  })

  it('displays the Modal', () => {
    const sliderProps: ISlider = {
      image: 'https://source.unsplash.com/800x600/?alpaca',
      currentIndex: 1,
      imageCount: 10,
    };
    const wrapper = mount(<Modal open={true}><Slider {...sliderProps} /></Modal>);
    expect(wrapper.find('RawCloseButton button').text()).toBe('Close');
  })
})
