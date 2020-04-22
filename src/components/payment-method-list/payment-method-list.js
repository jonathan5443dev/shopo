import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Text from '../text/text';

import * as Tags from './styles';

import Mastercard from '../../assets/images/mastercard.png';

const PaymentMethodList = ({ paymentMethods }) => {
  const { t } = useTranslation();

  const getIconByEntity = entity => {
    switch (entity) {
      case 'mastercard':
        return Mastercard;
      default:
        return null;
    }
  };

  return (
    <Tags.Container>
      <Tags.Title>
        <Text type="headline 3" color="black">
          {t('checkout.payment')}
        </Text>
        <Tags.ChangeLink>
          <Text color="red">{t('checkout.change')}</Text>
        </Tags.ChangeLink>
      </Tags.Title>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <Tags.PaymentMethodContainer key={index}>
              <Tags.CardImageContainer>
                <Tags.CardImage
                  source={getIconByEntity(item.entity)}
                  resizeMode="cover"
                />
              </Tags.CardImageContainer>
              <Text type="hightlight" color="black">
                {`**** **** **** ${item.finalNumbers}`}
              </Text>
            </Tags.PaymentMethodContainer>
          );
        }}
      />
    </Tags.Container>
  );
};

PaymentMethodList.propTypes = {
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      finalNumbers: PropTypes.string,
      entity: PropTypes.string
    }))
};

PaymentMethodList.defaultProps = {
  paymentMethods: []
};

export default PaymentMethodList;
