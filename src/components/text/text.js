import React from 'react';
import {FancyText} from './styles.js';

const Text = ({children, type}) => {
  return <FancyText type={type}>{children}</FancyText>;
};

export default Text;
