import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import PlaylistItem from '../src';
import { text, withKnobsOptions, number, boolean } from '@storybook/addon-knobs';

// ToDo: Add this globally and check escaped HTML implications (xss anyone???)
addDecorator(withKnobsOptions({
  timestamps: true, // Doesn't emit events while user is typing.
  escapeHTML: false // Escapes strings to be safe for inserting as innerHTML. This option is true by default in storybook for Vue, Angular, and Polymer, because those frameworks allow rendering plain HTML.
                   // You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
}));

const numberOfItems = number('Number of playlistitems', 5);

storiesOf('PlaylistItem', module)
  .add('with text', () => {
    return <PlaylistItem 
      title={text('title', 'Piers Steel: Why we procrastinate - and how to stop')}
      duration={text('duration', "16 min")}
      broadcast={text('broadcast', 'RNZ Music')}
      date={text('date', '06 Jan 2019')}
      hasDivider={boolean('Has divider', true)}
      selected={boolean('Selected', true)}
    />
  });
