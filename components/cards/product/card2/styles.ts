import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

interface LabelProps {
  isNew?: boolean;
}

export const Label = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<LabelProps>(['isNew']),
})<LabelProps>`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 2px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;

  ${media.md`
    top: 16px;
    left: 16px;
    padding: 4px 14px;
  `}

  ${({ isNew, theme }) =>
    isNew ? `background: white;` : `background: ${theme.token.teal6}`}
`;

export const Content = styled.div`
  text-align: center;
`;
