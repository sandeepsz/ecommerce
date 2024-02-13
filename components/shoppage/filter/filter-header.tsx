import Text from '@/ui/text';
import { UnstyledButton } from '@/ui/button/styles';
import Icon from '@/components/icons';

import { StyledHeader } from './styles';

type FilterHeaderProps = {
  onClose: () => void;
};

export const FilterHeader = ({ onClose }: FilterHeaderProps) => (
  <StyledHeader>
    <Text
      size='22'
      semibold
      color='black'
    >
      Filter
    </Text>
    <UnstyledButton onClick={onClose}>
      <Icon
        type='close'
        size={24}
      />
    </UnstyledButton>
  </StyledHeader>
);
