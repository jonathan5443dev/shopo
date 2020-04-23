import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import Text from '../text/text';

import * as Tags from './styles';

import DHL from '../../assets/images/dhl.png';
import FedEx from '../../assets/images/fedex.png';

const DeliveryMethodCard = ({ deliveryMethods }) => {
  const { t } = useTranslation()

  const getIconByDelivery = delivery => {
    switch (delivery) {
      case 'dhl':
        return DHL;
      case 'fedex':
        return FedEx;
      default:
        return null;
    }
  };

  return (
    <Tags.Container>
      <Tags.Title>
        <Text type="headline 3" color="black">
          {t('checkout.deliveryMethod')}
        </Text>
      </Tags.Title>
      <FlatList
        horizontal
        data={deliveryMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Tags.DeliveryCardContainer key={item.id}>
            <Tags.DeliveryCard>
              <Tags.CardImageContainer>
                <Tags.CardImage
                  source={getIconByDelivery(item.name)}
                  resizeMode="cover"
                />
              </Tags.CardImageContainer>
              <Text type="small" color="black">
                {item.time}
              </Text>
            </Tags.DeliveryCard>
          </Tags.DeliveryCardContainer>
        )}
      />
    </Tags.Container>
  );
};


DeliveryMethodCard.propTypes = {
  deliveryMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      time: PropTypes.string
    }))
};

DeliveryMethodCard.defaultProps = {
  deliveryMethods: []
};

export default DeliveryMethodCard;
