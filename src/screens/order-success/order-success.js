import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../components/text/text';
import Button from '../../components/button/button';

import * as Tags from "./styles";

import SuccessImage from "../../assets/images/order-success.png";

const OrderDetail = () => {
  const { t } = useTranslation();

  return (
    <Tags.Content>
      <Tags.TopContent>
        <Tags.BagsImages source={SuccessImage} />
        <Text type="headline" color="black">{t("orders.success")}</Text>
        <Tags.Description>
          <Text type="description" color="black">{t("orders.deliverSoon")}</Text>
          <Text type="description" color="black">{t("orders.thanks")}</Text>
        </Tags.Description>
      </Tags.TopContent>
      <Button value={t("orders.continueShopping")} />
    </Tags.Content>
  );
}

export default OrderDetail;
