import React from 'react';
import Container from '../../components/container/container';
import {useDispatch} from 'react-redux';
import AddressCard from '../../components/address-card/address-card';
import {AddressList, AddButton} from './styles.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import addressesActions from '../../redux/reducers/addresses';

const mockedAddress = {
  name: 'Office',
  address: 'Dorothy perkings',
  city: '30',
  state: 'Evening dress 1',
  zipcode: '15',
  country: '12',
};

const Addresses = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <AddressList>
        <AddressCard address={mockedAddress} />
        <AddressCard address={mockedAddress} />
        <AddressCard address={mockedAddress} />
        <AddressCard address={mockedAddress} />
      </AddressList>
      <AddButton
        onPress={() => dispatch(addressesActions.startCreateAddressFlow())}>
        <FontAwesomeIcon style={{color: '#ffffff'}} icon={faPlus} />
      </AddButton>
    </Container>
  );
};

export default Addresses;
