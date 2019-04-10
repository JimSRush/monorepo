import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import PlaylistItem from '../src';
import { text, withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

storiesOf('PlaylistItem', module)
  .add('with text', () => {
    return <PlaylistItem 
      title={text('title', '')}
      duration={text('duration', '27\'14\"')}
      broadcast={text('broadcast', 'RNZ Music')}
      date={text('date', '06 Jan 2019')}
      hasDivide={true}
    />
  });
