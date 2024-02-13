import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import styled from 'styled-components';

interface CenterProps {
  height?: string;
  direction?: 'row' | 'column';
}

const Center = styled('div').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<CenterProps>([
    'height',
    'direction',
  ]),
})<CenterProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || '100%'};
`;

export default Center;
