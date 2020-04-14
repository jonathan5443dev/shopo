import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import Category from './category';

import * as Tags from './styles';

const Categories = ({categories}) => {
  return (
    <>
      <Tags.Tabs>
        {categories.map((element, index) => {
          return (
            <View
              key={`${element}-${index}`}
              tabLabel={`${element.categoryName}`}>
              <Tags.CategoryContainer key={`${element.categoryName}-${index}`}>
                {element.subcategories.map((subcategory, i) => (
                  <Category subcategory={subcategory} index={i} />
                ))}
              </Tags.CategoryContainer>
            </View>
          );
        })}
      </Tags.Tabs>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      categoryName: PropTypes.string,
    }),
  ),
};

Categories.defaultProps = {
  categories: [
    {
      id: 1,
      categoryName: 'potato #1',
      subcategories: [
        {
          id: 0,
          subCategoryName: 'SUMMER SALES',
          discountMessage: 'Up to 20% off',
          imageUrl: null,
          type: 'offer',
        },
        {
          id: 1,
          subCategoryName: 'potato 1',
          imageUrl: 'https://wwww.potato.com',
          discountMessage: null,
          type: 'regular',
        },
        {
          id: 2,
          subCategoryName: 'potato 2',
          imageUrl: 'https://wwww.potato.com',
          discountMessage: null,
          type: 'regular',
        },
        {
          id: 4,
          subCategoryName: 'SUMMER SALES',
          discountMessage: 'Up to 70% off',
          imageUrl: null,
          type: 'offer',
        },
        {
          id: 5,
          subCategoryName: 'potato 2',
          imageUrl: 'https://wwww.potato.com',
          discountMessage: null,
          type: 'regular',
        },
        {
          id: 6,
          subCategoryName: 'potato 2',
          imageUrl: 'https://wwww.potato.com',
          discountMessage: null,
          type: 'regular',
        },
        {
          id: 7,
          subCategoryName: 'potato 2',
          imageUrl: 'https://wwww.potato.com',
          discountMessage: null,
          type: 'regular',
        },
      ],
    },
    {
      id: 1,
      categoryName: 'potato #2',
      subcategories: [
        {
          id: 0,
          subCategoryName: 'SUMMER SALES',
          discountMessage: 'Up to 50% off',
          imageUrl: null,
          type: 'offer',
        },
        {
          id: 1,
          subCategoryName: 'potato 1',
          imageUrl: 'https://wwww.potato.com',
          discountMessage: null,
          type: 'regular',
        },
        {
          id: 2,
          subCategoryName: 'potato 2',
          imageUrl: 'https://wwww.potato.com',
          discountMessage: null,
          type: 'regular',
        },
        {
          id: 4,
          subCategoryName: 'SUMMER SALES',
          discountMessage: 'Up to 50% off',
          imageUrl: null,
          type: 'offer',
        },
      ],
    },
  ],
};

export default Categories;

/*
- Si no tiene subcategorias debemos pintar una lista de Subcategorias
- Modificar el componente Category para que reciba props
*/
