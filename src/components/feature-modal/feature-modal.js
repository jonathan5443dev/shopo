import React from 'react';
import PropTypes from 'prop-types';

import Text from '../text/text';

import * as Tags from './styles';

const FeatureModal = ({
  title,
  options,
  onSelectOption,
  visible,
  onRequestClose,
}) => {
  return (
    <Tags.ModalCotainer>
      <Tags.Modal animationType="slide" transparent={true} visible={visible}>
        <Tags.Content>
          <Tags.FeatureContainer>
            <Tags.CloseButton onPress={onRequestClose} />
            <Text type="headline 3">{title}</Text>
            <Tags.ItemsContainer>
              {options.map(element => (
                <Tags.Item
                  key={`${element.value}${element.id}`}
                  onPress={onSelectOption}>
                  <Tags.ItemValue>{element.value}</Tags.ItemValue>
                </Tags.Item>
              ))}
            </Tags.ItemsContainer>
          </Tags.FeatureContainer>
        </Tags.Content>
      </Tags.Modal>
    </Tags.ModalCotainer>
  );
};

FeatureModal.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelectOption: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

FeatureModal.defaultProps = {
  visible: true,
};

export default FeatureModal;
