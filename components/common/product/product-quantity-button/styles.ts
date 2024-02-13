import { UnstyledButton } from '@/ui/button/styles';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import { styled } from 'styled-components';

/**
 * TODO: add other variants
 */
export type StyledProductQuantityButtonProps = {
  size: 'small';
};

export const StyledProductQuantityButton = styled.div.withConfig({
  shouldForwardProp:
    shouldNotForwardPropsWithKeys<StyledProductQuantityButtonProps>(['size']),
})<StyledProductQuantityButtonProps>`
  height: 32px;
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.token.black3};
`;

export const StyledIconAction = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
