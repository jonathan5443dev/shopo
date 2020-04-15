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
          <Text type="headline 3">{subcategory.subCategoryName}</Text>
        </Tags.CategoryTab>
      </Tags.CategoryTabContainer>
    );
  }

  return (
    <Tags.CategoryTabContainer key={`${subcategory.subCategoryName}-${index}`}>
      <Tags.SummerSalesContainer>
        <Text color="white" type="headline 3">
          {subcategory.subCategoryName}
        </Text>
        <Text color="white">{subcategory.discountMessage}</Text>
      </Tags.SummerSalesContainer>
    </Tags.CategoryTabContainer>
  );
};

Category.propTypes = {
  subcategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subCategoryName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    discountMessage: PropTypes.string,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

Category.defaultProps = {
  subcategory: {
    imageUrl: null,
    discountMessage: null,
  },
};

export default Category;
