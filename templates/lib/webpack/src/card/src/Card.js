import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactPlaceholder from 'react-placeholder';
import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';

const Card = ({ className, children, getPlaceholder, onCardClick, showPlaceholder  }) => {
  return (
    <div className={ classnames('card', className) } onClick={ onCardClick }>
      <ReactPlaceholder showLoadingAnimation ready={ !showPlaceholder } customPlaceholder={ getPlaceholder() }>
        { children }
      </ReactPlaceholder>
    </div>
  );
}

function getDefaultPlaceholder() {
  return (
    <div className='awesome-placeholder'>
      <RectShape color='#e4e4e4' className='rect-shape' />
      <TextBlock rows={7} color='#e4e4e4' className='text-block' />
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  getPlaceholder: PropTypes.func,
  onCardClick: PropTypes.func,
  showPlaceholder: PropTypes.bool.isRequired,
}

Card.defaultProps = {
  className: '',
  children: undefined,
  getPlaceholder: getDefaultPlaceholder,
  onCardClick: undefined,
  showPlaceholder: true,
}

export default Card;
