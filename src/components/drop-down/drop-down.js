/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import ModalDropDown from 'react-native-modal-dropdown';

import theme from '../../config/themes/default';

import * as Tags from './styles';

const mockData = [
  {code: 'CO', phone_code: '57'},
  {code: 'AR', phone_code: '54'},
  {code: 'VE', phone_code: '58'},
  {code: 'CL', phone_code: '56'},
  {code: 'US', phone_code: '1'},
];

const DropDown = ({
  error,
  onChangeText,
  keyboardType,
  onChangeCountryCode,
  withoutCode,
  editable,
}) => {
  return (
    <>
      <ModalDropDown
        disabled={!editable}
        options={mockData.map(
          country => `${withoutCode ? '' : `+${country.phone_code}`}`,
        )}
        defaultValue={`${withoutCode ? '' : `+${mockData[0].phone_code}`}`}
        textStyle={{
          fontSize: 14,
          color: theme.grey,
          fontFamily: theme.nunitoExtraBold,
          opacity: editable ? 1 : 0.2,
        }}
        onSelect={(index, value) =>
          onChangeCountryCode(`+${value.split('+')[1]}`)
        }
        dropdownTextStyle={{
          fontSize: 12,
          color: theme.grey,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      />
      <Tags.ArrowDown editable={editable}>▼</Tags.ArrowDown>
    </>
  );
};

DropDown.propTypes = {
  error: PropTypes.string,
  icon: PropTypes.number,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  onChangeCountryCode: PropTypes.func,
  withoutCode: PropTypes.bool,
  editable: PropTypes.bool,
};

DropDown.defaultProps = {
  error: undefined,
  icon: undefined,
  keyboardType: 'default',
  onChangeCountryCode: () => {},
  withoutCode: false,
  editable: true,
};

export default DropDown;
