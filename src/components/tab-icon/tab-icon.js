import React from 'react';
import PropTypes from 'prop-types';
import {ImageContainer, Image} from './styles';
import HomeIcon from '../../assets/images/home.png';
import AccountIcon from '../../assets/images/profile.png';
import BagIcon from '../../assets/images/bag.png';
import FavoritesIcon from '../../assets/images/favorites.png';

const TabIcon = ({name, color, focused}) => {
  const sourceFinder = () => {
    switch (name) {
      case 'Home':
        return HomeIcon;
      case 'Categories':
        return FavoritesIcon;
      case 'Bag':
        return BagIcon;
      case 'Account':
        return AccountIcon;
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
