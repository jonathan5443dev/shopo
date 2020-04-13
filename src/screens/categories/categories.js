import React from 'react';
import {View} from 'react-native';

import Category from './category';

import * as Tags from './styles';

const Categories = () => {
  return (
    <>
      <Tags.Tabs>
        <View tabLabel="Women">
          <Category />
        </View>
        <View tabLabel="Men">
          <Category />
        </View>
        <View tabLabel="kids">
          <Category />
        </View>
        <View tabLabel="kids2 word word word word">
          <Category />
        </View>
        <View tabLabel="kids2 word word word word">
          <Category />
        </View>
        <View tabLabel="kids2 word word word word">
          <Category />
        </View>
        <View tabLabel="kids2 word word word word">
          <Category />
        </View>
      </Tags.Tabs>
    </>
  );
};

export default Categories;
