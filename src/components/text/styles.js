import styled from 'styled-components/native';

const styleByType = type => {
  switch (type) {
    case 'headline':
      return {
        'font-weight': '700',
        'font-size': '34px',
      };
    case 'headline 2':
      return {
        'font-weight': '600',
        'font-size': '24px',
      };
    case 'headline 3':
      return {
        'font-weight': '600',
        'font-size': '18px',
      };
    case 'small':
      return {
        'font-weight': '500',
        'font-size': '11px',
      };
    case 'body':
      return {
        'font-weight': '500',
        'font-size': '14px',
      };
    case 'highlight':
      return {
        'font-weight': '600',
        'font-size': '16px',
      };
    case 'description':
      return {
        'font-weight': '500',
        'font-size': '14px',
        'line-height': '1.5px',
      };
    default:
      return {
        'font-weight': '500',
        'font-size': '14px',
      };
  }
};

export const FancyText = styled.Text`
  font-family: Metropolis;
  ${$props => styleByType($props.type)}
`;
