import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import ImageItem from '../src';

storiesOf('ImageItem', module)
  .add('with text', () => {
    return <ImageItem 
        image={"http://placekitten.com/250/250"}
        buttonText={"View"}
    />
  });
