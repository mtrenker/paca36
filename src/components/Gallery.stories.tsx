import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Gallery, Image } from './Gallery';

storiesOf('Gallery/Overview', module)
  .add('default', () => {
    return (
      <Gallery />
    );
  });

  storiesOf('Gallery/Image', module)
  .add('default', () => {
    return (
      <Image />
    );
  });
