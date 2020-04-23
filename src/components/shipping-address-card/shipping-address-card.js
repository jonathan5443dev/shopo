import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

import Text from '../text/text';
import Button from '../button/button';
import theme from '../../config/themes/default';

import * as Tags from './styles';

const ShippingAddressCard = ({name, address, country}) => {
  const {t} = useTranslation();
  return (
    <Tags.Container>
      <Text type="headline 3" color="black">
        {t('checkout.shippingAddress')}
      </Text>
      <Tags.AddressCard>
        <Tags.Name>
          <Text type="hightlight">{name}</Text>
          <Tags.ChangeLink>
            <Text color="red">{t('checkout.change')}</Text>
          </Tags.ChangeLink>
        </Tags.Name>
        <Tags.Address>
          <Text type="hightlight">{address}</Text>
          <Text type="hightlight">{country}</Text>
        </Tags.Address>
      </Tags.AddressCard>
    </Tags.Container>
  );
};

ShippingAddressCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  country: PropTypes.string
};

ShippingAddressCard.defaultProps = {
  country: ''
};

export default ShippingAddressCard;
