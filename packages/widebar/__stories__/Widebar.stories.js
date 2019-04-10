import React from 'react';
import { storiesOf } from '@storybook/react';
import Widebar from '../src';

storiesOf('Widebar', module)
  .add('with text', () => (
    <Widebar text={"Some stuff happened today"}/>
  ));
