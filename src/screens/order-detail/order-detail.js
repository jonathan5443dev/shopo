import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from "react-native";

import Container from '../../components/container/container';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import ProductOrderCard from "../../components/product-order-card/product-order-card";

import * as Tags from "./styles";

const order = {
  id: '1947034',
  trackingNumber: 'IW432123213',
  quantity: 3,
  totalAmount: '112$',
  status: 'delivered',
  date: '05-12-2019',
  products: [{
    id: '1',
    name: 'Pullover',
    description: 'mango',
    color: 'Gray',
    size: 'L',
    units: 1,
    price: 51
  },
  {
    id: '2',
    name: 'Pullover',
    description: 'mango',
    color: 'Gray',
    size: 'L',
    units: 1,
    price: 51
  }],
  shippingAddress: '3 NewBridge Court, Chino Hills, CA 91709, United States',
  paymentMethod: "3947",
  deliveryMethod: "Fedex, 3 days, 15$",
  discount: '10%, Personal promo code',
  totalAmount: '113$'
};

const OrderDetail = () => {
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

  const AlignedRow = ({ name, value }) => (
    <Tags.AlignRow>
      <Tags.HalfRow>
        <Text type="description" color="gray">{`${t(`checkout.${name}`)}:  `}</Text>
      </Tags.HalfRow>
      <Tags.HalfRow>
        <Text type="highlight">{value}</Text>
      </Tags.HalfRow>
    </Tags.AlignRow>
  )

  return (
    <Container>
      <Tags.Row>
        <Text type="highlight">{`${t('orders.order')} N. ${order.id}`}</Text>
        <Text type="description" color="gray">{order.date}</Text>
      </Tags.Row>
      <Tags.Row>
        <Text type="description" color="gray">
          {`${t('orders.trackingNumber')}:  `}
          <Text type="highlight">{order.trackingNumber}</Text>
        </Text>
        {renderTextByStatus(order.status)}
      </Tags.Row>

      <Tags.ProductsContainer>
        <Text type="highlight">3 items</Text>
        <FlatList
          data={order.products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductOrderCard product={item} />}
        />
      </Tags.ProductsContainer>

      <Tags.OrderInformation>
        <Text type="highlight">Order Information</Text>
        <AlignedRow name="shippingAddress" value={order.shippingAddress} />
        <AlignedRow name="paymentMethod" value={order.paymentMethod} />
        <AlignedRow name="deliveryMethod" value={order.deliveryMethod} />
        <AlignedRow name="discount" value={order.discount} />
        <AlignedRow name="totalAmount" value={order.totalAmount} />
      </Tags.OrderInformation>
      <Tags.Row>
        <Tags.ButtonContainer>
          <Button
            outlined
            color="black"
            value={t('orderDetail.reorder')}
          />
        </Tags.ButtonContainer>
        <Tags.ButtonContainer>
          <Button
            color="primary"
            value={t('orderDetail.leaveFeedback')}
          />
        </Tags.ButtonContainer>
      </Tags.Row>
    </Container>
  );
}

export default OrderDetail;
