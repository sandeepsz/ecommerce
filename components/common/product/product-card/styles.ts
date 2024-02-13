import { styled } from 'styled-components';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

export const StyledProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const StyledBadgeGroup = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;
`;

type StyledProductCardContentProps = {
  align: 'left' | 'center';
};

export const StyledProductCardContent = styled.div.withConfig({
  shouldForwardProp:
    shouldNotForwardPropsWithKeys<StyledProductCardContentProps>(['align']),
})<StyledProductCardContentProps>`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  gap: 4px;
`;
