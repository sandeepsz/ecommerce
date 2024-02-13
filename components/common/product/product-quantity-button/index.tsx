import Text from '@/ui/text';
import Icon from '@/components/icons';

import {
  StyledIconAction,
  StyledProductQuantityButton,
  StyledProductQuantityButtonProps,
} from './styles';

export type ProductQuantityButtonProps =
  Partial<StyledProductQuantityButtonProps> & {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
  };

export const ProductQuantityButton = ({
  size = 'small',
  quantity,
  onIncrease,
  onDecrease,
}: ProductQuantityButtonProps) => {
  return (
    <StyledProductQuantityButton size={size}>
      <StyledIconAction onClick={onDecrease}>
        <Icon
          type='minus'
          size={16}
        />
      </StyledIconAction>
      <Text
        size='12'
        semibold
      >
        {quantity}
      </Text>
      <StyledIconAction onClick={onIncrease}>
        <Icon
          type='add'
          size={16}
        />
      </StyledIconAction>
    </StyledProductQuantityButton>
  );
};
