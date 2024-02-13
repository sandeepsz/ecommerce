import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import styled from 'styled-components';

interface TextProps {
  color?: string;
  bold?: boolean;
  semibold?: boolean;
  size?: '26' | '22' | '20' | '18' | '16' | '14' | '12';
  strike?: boolean;
}

const Text = styled('p').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<TextProps>([
    'color',
    'bold',
    'semibold',
    'size',
    'strike',
  ]),
})<TextProps>`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: ${(props) => (props.bold ? 700 : props.semibold ? 600 : 400)};
  color: ${(props) => props.color || props.theme.token.colorText};
  margin: 0;
  text-decoration: ${({ strike }) => (strike ? 'line-through' : 'none')};
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ size }) => {
    switch (size) {
      case '26':
        return '40px';
      case '22':
        return '34px';
      case '20':
        return '32px';
      case '18':
        return '30px';
      case '16':
        return '26px';
      case '14':
        return '22px';
      case '12':
        return '20px';
      default:
        return '26px';
    }
  }};
`;
export default Text;

interface ButtonTextProps {
  color?: 'light' | 'dark';
  size?: 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
  disabled?: boolean;
}

export const ButtonText = styled.p.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<ButtonTextProps>([
    'color',
    'size',
    'disabled',
  ]),
})<ButtonTextProps>`
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  margin: 0;
  color: ${({ color, disabled, theme }) =>
    disabled
      ? theme.token.black3
      : color === 'light'
      ? '#FFFFFF'
      : theme.token.black9};
  ${({ size }) => {
    switch (size) {
      case 'xLarge':
        return 'font-size: 26px; line-height: 38px;';
      case 'large':
        return 'font-size: 22px; line-height: 34px;';
      case 'medium':
        return 'font-size: 18px; line-height: 32px; letter-spacing: -0.4px;';
      case 'small':
        return 'font-size: 16px; line-height: 28px; letter-spacing: -0.4px;';
      case 'xSmall':
        return 'font-size: 14px; line-height: 24px;';
      default:
        return 'font-size: 26px; line-height: 38px;';
    }
  }}
`;
