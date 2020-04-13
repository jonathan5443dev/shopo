import React from 'react';
import PropTypes from 'prop-types';

import {FancyText} from './styles.js';

const Text = ({children, type, color}) => {
  return (
    <FancyText type={type} color={color}>
      {children}
    </FancyText>
  );
};

Text.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.func,
  color: PropTypes.string,
};

Text.defaultProps = {
  type: 'body',
  color: 'black',
};

export default Text;
