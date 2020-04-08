import React from 'react';
import {Background, Wrapper} from './styles';

const Container = ({children}) => {
  return (
    <Background>
      <Wrapper>{children}</Wrapper>
    </Background>
  );
};

export default Container;
