import React from 'react';
import Container from '../../components/container/container';
import Text from '../../components/text/text';
import {useTranslation} from 'react-i18next';
import AvatarImage from '../../assets/images/product-1.png';
import {List, Option, Header, Avatar, Information} from './styles';

const Profile = () => {
  const {t} = useTranslation();
  const options = [
    {
      id: '1',
      title: t('profile.shippingAddresses'),
      subTitle: `3 ${t('profile.addresses')}`,
      action: () => {},
    },
    {
      id: '2',
      title: t('profile.myOrders'),
      subTitle: `3 ${t('profile.orders')}`,
      action: () => {},
    },
    {
      id: '3',
      title: t('profile.settings'),
      subTitle: t('profile.notificationsPassword'),
      action: () => {},
    },
    {
      id: '4',
      title: t('profile.logout'),
      subTitle: t('profile.logoutSubtitle'),
      action: () => {},
    },
  ];
  const renderOption = option => (
    <Option onPress={() => option.action}>
      <Text type="highlight">{option.title}</Text>
      <Text type="small">{option.subTitle}</Text>
    </Option>
  );
  return (
    <Container>
      <Text type="headline">{t('profile.title')}</Text>
      <Header>
        <Avatar source={AvatarImage} />
        <Information>
          <Text type="headline 3">Jonathan Buitrago Lopez</Text>
          <Text> jonathan5443@gmail.com</Text>
        </Information>
      </Header>
      <List
        data={options}
        renderItem={({item}) => renderOption(item)}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Profile;
