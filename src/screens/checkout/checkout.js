import React from 'react';
import {useTranslation} from 'react-i18next';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import Container from '../../components/container/container';
import ShippingAddressCard from '../../components/shipping-address-card/shipping-address-card';
import PaymentMethodList from '../../components/payment-method-list/payment-method-list';
import DeliveryMethodCard from '../../components/delivery-method-card/delivery-method-card';

import * as Tags from "./styles";

const mockUser = {
  name: 'Jane Doe',
  address: '3 Newbride Court',
  country: 'Chino Hills, CA 91709, United States',
  paymentMethod: [{
    id: "master",
    finalNumbers: '3947',
    entity: "mastercard"
  }],
  deliveryMethodsAvailable: [
    {
      id: "1",
      name: "fedex",
      time: " 1 - 3 days"
    },
    {
      id: "2",
      name: "dhl",
      time: " 3 - 5 days"
    },
    {
      id: "3",
      name: "fedex",
      time: " 10 - 20 days"
    },
    {
      id: "4",
      name: "dhl",
      time: " 10 - 20 days"
    }
  ]
}

const Checkout = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <ShippingAddressCard
        name={mockUser.name}
        address={mockUser.address}
        country={mockUser.country}
      />
      <PaymentMethodList paymentMethods={mockUser.paymentMethod} />
      <DeliveryMethodCard deliveryMethods={mockUser.deliveryMethodsAvailable} />
      <Tags.OrderSummary>
        <Tags.AmountContainer>
          <Text type="body" color="black">{t('checkout.order')}</Text>
          <Text type="headline 3" color="black">12$</Text>
        </Tags.AmountContainer>
        <Tags.AmountContainer>
          <Text type="body" color="black">{t('checkout.delivery')}</Text>
          <Text type="headline 3" color="black">15$</Text>
        </Tags.AmountContainer>
        <Tags.AmountContainer>
          <Text type="highlight" color="black">{t('checkout.summary')}</Text>
          <Text type="headline 3" color="black">127$</Text>
        </Tags.AmountContainer>
        <Button value={t('checkout.submitOrder')} />
      </Tags.OrderSummary>
    </Container>
  )
}

export default Checkout;