import React from 'react';
import PropTypes from 'prop-types';
import {ImageContainer, Image} from './styles';
import HomeIcon from '../../assets/images/home.png';
import ProfileIcon from '../../assets/images/profile.png';

const TabIcon = ({name, color, focused}) => {
  const sourceFinder = () => {
    switch (name) {
      case 'Home':
        return HomeIcon;
      case 'Profile':
        return ProfileIcon;
      default:
        return HomeIcon;
    }
  };

  return (
    <ImageContainer>
      <Image source={sourceFinder()} color={color} />
    </ImageContainer>
  );
};

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default TabIcon;
