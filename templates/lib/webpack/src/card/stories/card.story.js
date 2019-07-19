/* eslint-disable import/no-extraneous-dependencies */
const React = require('react');
const { TextBlock, RectShape } = require('react-placeholder/lib/placeholders');

const { storiesOf } = require('@storybook/react');
const { action } = require('@storybook/addon-actions');
const { withInfo } = require('@storybook/addon-info');
const { withKnobs, boolean } = require('@storybook/addon-knobs');

const { grayBackground } = require('../../../.storybook/backgrounds');

const Card = require('../').default;
require('./card.story.scss');

const customPlaceholder = (
  <div className='awesome-placeholder'>
    <TextBlock rows={7} color='#e4e4e4' className='text-block' />
  </div>
);

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(grayBackground)
  .add('Default', withInfo()(() => (
    <Card
      className="demo-card"
      showPlaceholder={ boolean('showPlaceholder', false) }
      onCardClick={ action('onCard:click') }
    >
      <div className="card-body">
        <h2>Card Box</h2>
        <p>This is a card.</p>
        <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
      </div>
    </Card>
  )))
  .add('With custom placeholder', withInfo()(() => (
    <Card
      className="demo-card"
      showPlaceholder={ boolean('showPlaceholder', true) }
      onCardClick={ action('onCard:click') }
      getPlaceholder={ () => customPlaceholder }
    >
      <div className="card-body">
        <h2>Card Box</h2>
        <p>This is a card.</p>
        <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
      </div>
    </Card>
  )));
