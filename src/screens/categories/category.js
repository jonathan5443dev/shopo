import React from 'react';

import Text from '../../components/text/text';

import * as Tags from './styles';

const Category = () => (
  <Tags.CategoryContainer>
    <Tags.CategoryTabContainer>
      <Tags.SummerSalesContainer>
        <Text color="white" type="headline 3">
          SUMMER SALES
        </Text>
        <Text color="white">Up to 50% off</Text>
      </Tags.SummerSalesContainer>
    </Tags.CategoryTabContainer>
    <Tags.CategoryTabContainer>
      <Tags.CategoryTab>
        <Text type="headline 3">Category #1</Text>
      </Tags.CategoryTab>
    </Tags.CategoryTabContainer>
    <Tags.CategoryTabContainer>
      <Tags.CategoryTab>
        <Text type="headline 3">Category #2</Text>
      </Tags.CategoryTab>
    </Tags.CategoryTabContainer>
    <Tags.CategoryTabContainer>
      <Tags.CategoryTab>
        <Text type="headline 3">Category #3</Text>
      </Tags.CategoryTab>
    </Tags.CategoryTabContainer>
    <Tags.CategoryTabContainer>
      <Tags.CategoryTab>
        <Text type="headline 3">Category #4</Text>
      </Tags.CategoryTab>
    </Tags.CategoryTabContainer>
    <Tags.CategoryTabContainer>
      <Tags.CategoryTab>
        <Text type="headline 3">Category #5</Text>
      </Tags.CategoryTab>
    </Tags.CategoryTabContainer>
  </Tags.CategoryContainer>
);

export default Category;
