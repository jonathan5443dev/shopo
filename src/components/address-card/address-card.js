import React from 'react';
import Text from '../text/text';
import {useTranslation} from 'react-i18next';

import * as Tags from './styles';

const AddressCard = ({address}) => {
  const {t} = useTranslation();
  return (
    <Tags.Container>
      <Text>{address.name}</Text>
      <Text type="description">{address.address}</Text>
      <Text>{t('addresses.default')}</Text>
      <Tags.Edit>
        <Text color="primary">{t('addresses.edit')}</Text>
      </Tags.Edit>
    </Tags.Container>
  );
};

export default AddressCard;
