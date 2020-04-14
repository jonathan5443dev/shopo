import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/text/text';

import * as Tags from './styles';

const Category = ({subcategory, index}) => {
  if (subcategory.type === 'regular') {
    return (
      <Tags.CategoryTabContainer
        key={`${subcategory.subCategoryName}-${index}`}>
        <Tags.CategoryTab>
          <Text type="headline 3">Category #1</Text>
        </Tags.CategoryTab>
      </Tags.CategoryTabContainer>
    );
  }

  return (
    <Tags.CategoryTabContainer key={`${subcategory.subCategoryName}-${index}`}>
      <Tags.SummerSalesContainer>
        <Text color="white" type="headline 3">
          SUMMER SALES
        </Text>
        <Text color="white">Up to 50% off</Text>
      </Tags.SummerSalesContainer>
    </Tags.CategoryTabContainer>
  );
};

Category.propTypes = {
  subcategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subCategoryName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    discountPercentage: PropTypes.number,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

Category.defaultProps = {
  subcategory: {
    imageUrl: null,
    discountPercentage: null,
  },
};

export default Category;
