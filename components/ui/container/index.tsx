import {
  ResponsiveValue,
  generateResponsiveStyle,
  media,
} from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import { styled } from 'styled-components';

interface ContainerProps {
  py?: ResponsiveValue<number>;
  pt?: ResponsiveValue<number>;
  pb?: ResponsiveValue<number>;
}

const Container = styled('section').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<ContainerProps>(['py']),
})<ContainerProps>`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  ${({ py = { base: 24, md: 52 } }) =>
    generateResponsiveStyle('padding-top', py)}
  ${({ py = { base: 24, md: 52 } }) =>
    generateResponsiveStyle('padding-bottom', py)}

  ${({ pt }) => pt && generateResponsiveStyle('padding-top', pt)}
  ${({ pb }) => pb && generateResponsiveStyle('padding-bottom', pb)}

  ${media.md`
    padding-left: 52px;
    padding-right: 52px;
  `}
`;

export default Container;
