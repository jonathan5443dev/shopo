import React from 'react';
import Text from '../../components/text/text';
import { FlatList } from "react-native";
import OrderCard from "../order-card/order-card";

import { useTranslation } from 'react-i18next';

import * as Tags from './styles';

const OrderList = ({ orders, ...props }) => {
  const { t } = useTranslation();
  return (
    <Tags.Container>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} {...props} />}
      />
    </Tags.Container>
  );
};

export default OrderList;
