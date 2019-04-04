import * as React from 'react';

import { storiesOf } from '@storybook/react';
import {number, withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import { Gallery, Image, IImage, Modal, Slider, ISlider } from './Gallery';

storiesOf('Gallery/Overview', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    let open = boolean('Modal open', false);
    const closeModalAction = () => {
      action('Close Modal');
      open = false;
    }

    const imageCount = number('Images', 10);
    const images: IImage[] = [...new Array(imageCount)].map((_, idx) => ({
      src: `https://source.unsplash.com/80${idx}x600/?alpaca`
    }));

    const stateIndex = number('Slider image', 1);
    let tmpIndex = stateIndex;
    const currentImage = images[tmpIndex - 1 ].src;
    const sliderProps: ISlider = {
      onNextClick: action('onNextClick'),
      onPrevClick: action('onPrevClick'),
      image: currentImage,
      imageCount: images.length + 1,
      currentIndex: tmpIndex,
    }

    return (
      <>
      <Gallery images={images} />
      <Modal open={open} onClose={closeModalAction}>
        <Slider {...sliderProps} />
      </Modal>
      </>
    );
  });

  storiesOf('Gallery/Image', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const image = 'https://source.unsplash.com/800x600/?alpaca';
    return (
      <Image src={image} />
    );
  });
