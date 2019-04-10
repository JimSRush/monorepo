import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Widebar from '../src';
import { select, withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

storiesOf('Widebar', module)
  .add('with text', () => {
    const type = select('Type', ["TYPE_BLACK", 'TYPE_ALERT'], 'TYPE_BLACK');
    return <Widebar 
      text={"Some stuff happened today"}
      type={type}
    />
  });
