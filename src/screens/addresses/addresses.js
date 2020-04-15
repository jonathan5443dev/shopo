import React from 'react';
import {useTranslation} from 'react-i18next';
import Container from '../../components/container/container';
import AddressCard from '../../components/address-card/address-card';
import {AddressList, AddButton} from './styles.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const mockedAddress = {
  name: 'Office',
  address: 'Dorothy perkings',
  city: '30',
  state: 'Evening dress 1',
  zipcode: '15',
  country: '12',
};

const Addresses = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <AddressList>
        <AddressCard address={mockedAddress} />
        <AddressCard address={mockedAddress} />
        <AddressCard address={mockedAddress} />
        <AddressCard address={mockedAddress} />
      </AddressList>
      <AddButton>
        <FontAwesomeIcon style={{color: '#ffffff'}} icon={faPlus} />
      </AddButton>
    </Container>
  );
};

export default Addresses;
