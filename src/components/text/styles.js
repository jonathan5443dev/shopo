import styled from 'styled-components/native';
import theme from '../../config/themes/default';

const styleByType = type => {
  switch (type) {
    case 'headline':
      return {
        'font-family': theme.fontFamilyBold,
        'font-size': '34px',
      };
    case 'headline 2':
      return {
        'font-family': theme.fontFamilySemiBold,
        'font-size': '24px',
      };
    case 'headline 3':
      return {
        'font-family': theme.fontFamilySemiBold,
        'font-size': '18px',
      };
    case 'small':
      return {
        'font-family': theme.fontFamily,
        'font-size': '11px',
      };
    case 'body':
      return {
        'font-family': theme.fontFamily,
        'font-size': '14px',
      };
    case 'highlight':
      return {
        'font-family': theme.fontFamilySemiBold,
        'font-size': '16px',
      };
    case 'description':
      return {
        'font-family': theme.fontFamily,
        'font-size': '16px',
        'letter-spacing': '-0.15px',
      };
    case 'crossed':
      return {
        'font-family': theme.fontFamily,
        'font-size': '14px',
        'text-decoration': 'line-through',
      };
    default:
      return {
        'font-family': theme.fontFamily,
        'font-size': '14px',
      };
  }
};

export const FancyText = styled.Text`
  ${$props => styleByType($props.type)}
  color: ${props => theme[props.color]};
  text-decoration-color: ${props => theme[props.color]};
  margin-vertical: 3px;
`;
