import { ResponsiveValue, generateResponsiveStyle } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import { styled } from 'styled-components';

interface SizedBoxProps {
  width?: ResponsiveValue<number>;
  height?: ResponsiveValue<number>;
}

const SizedBox = styled('div').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<SizedBoxProps>([
    'height',
    'width',
  ]),
})<SizedBoxProps>`
  ${({ width }) => width && generateResponsiveStyle('width', width)}
  ${({ height }) => height && generateResponsiveStyle('height', height)}
`;

export default SizedBox;
