import React from 'react';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import { FlatList } from "react-native";

import { useTranslation } from 'react-i18next';

import * as Tags from './styles';

const OrderCard = ({ order, navigation }) => {
  const { t } = useTranslation();

  const renderTextByStatus = status => {
    switch (status) {
      case 'delivered':
        return <Text type="body" color="green">{t('orders.delivered')}</Text>
      case 'processing':
        return <Text type="body" color="black">{t('orders.processing')}</Text>;
      case 'cancelled':
        return <Text type="body" color="red">{t('orders.cancelled')}</Text>
      default:
        return null;
    }
  }

  return (
    <Tags.Container>
      <Tags.Row>
        <Text type="highlight">{`${t('orders.order')} N. ${order.id}`}</Text>
        <Text type="description" color="gray">{order.date}</Text>
      </Tags.Row>
      <Tags.Row>
        <Text type="description" color="gray">
          {`${t('orders.trackingNumber')}:  `}
          <Text type="highlight">{order.trackingNumber}</Text>
        </Text>
      </Tags.Row>
      <Tags.Row>
        <Text type="description" color="gray">
          {`${t('orders.quantity')}: `}
          <Text type="highlight">{order.quantity}</Text>
        </Text>
        <Text type="description" color="gray">
          {`${t('orders.totalAmount')}: `}
          <Text type="highlight">{order.totalAmount}</Text>
        </Text>
      </Tags.Row>
      <Tags.Row>
        <Tags.ButtonContainer>
          <Button
            onPress={() => navigation.navigate("OrderDetail", { id: order.id })}
            outlined
            color="black"
            value={t('orders.details')}
          />
        </Tags.ButtonContainer>
        {renderTextByStatus(order.status)}
      </Tags.Row>
    </Tags.Container>
  );
};

export default OrderCard;
