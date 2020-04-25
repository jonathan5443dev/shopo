import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../../components/container/container';
import Text from '../../components/text/text';
import OrderList from '../../components/order-list/order-list';

import * as Tags from './styles';

const ordersMock = [
  {
    id: '1947034',
    trackingNumber: 'IW432123213',
    quantity: 3,
    totalAmount: '112$',
    status: 'delivered',
    date: '05-12-2019'
  },
  {
    id: '1947035',
    trackingNumber: 'IW432123214',
    quantity: 2,
    totalAmount: '110$',
    status: 'processing',
    date: '05-12-2019'
  },
  {
    id: '1947036',
    trackingNumber: 'IW432123215',
    quantity: 1,
    totalAmount: '10$',
    status: 'cancelled',
    date: '05-12-2019'
  }
];

const filterConfig = [
  {
    name: 'delivered'
  },
  {
    name: 'processing'
  },
  {
    name: 'cancelled'
  }
]

const Orders = (props) => {
  const { t } = useTranslation();
  const [filterActive, setFilterActive] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState(ordersMock);

  const handleFilter = (filter, isActive) => {
    if (isActive) {
      setFilterActive(false);
      setFilteredOrders(ordersMock);
      return;
    }

    setFilterActive(filter);
    setFilteredOrders(ordersMock.filter(order => filter === order.status));
  }

  const renderFilterButtons = () => {
    return filterConfig.map(filter => {
      const isActive = filter.name === filterActive;
      if (isActive) {
        return (
          <Tags.FilterActiveButton onPress={() => handleFilter(filter.name, isActive)}>
            <Text type="highlight" color="pureWhite">{t(`orders.${filter.name}`)}</Text>
          </Tags.FilterActiveButton>
        )
      }

      return (
        <Tags.FilterButton onPress={() => handleFilter(filter.name)}>
          <Text type="highlight" color="black">{t(`orders.${filter.name}`)}</Text>
        </Tags.FilterButton>
      )
    });
  };

  return (
    <Container>
      <Text type="headline">{t('orders.title')}</Text>
      <Tags.Filters>
        {renderFilterButtons()}
      </Tags.Filters>
      <OrderList orders={filteredOrders} {...props} />
    </Container>
  );
};

export default Orders;
