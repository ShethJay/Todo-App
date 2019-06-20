import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';

const InfiniteSensor = ({ className, onReachedBottom }) => (
  <div className={className}>
    <VisibilitySensor
      partialVisibility
      onChange={isVisible => isVisible && onReachedBottom()}
    />
  </div>
);

InfiniteSensor.propTypes = {
  className: PropTypes.string,
  onReachedBottom: PropTypes.func.isRequired,
};

InfiniteSensor.defaultProps = {
  className: '',
};

export default InfiniteSensor;
