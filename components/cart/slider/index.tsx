import Icon from '@/components/icons';
import { StyledSlider, StyledSliderHandle, StyledSliderRail } from './styles';

type CartGoalSliderProps = {
  value: number;
};

export const CartGoalSlider = ({ value }: CartGoalSliderProps) => (
  <StyledSlider>
    <StyledSliderRail percent={value} />
    <StyledSliderHandle percent={value}>
      <Icon
        type='truck'
        size={24}
      />
    </StyledSliderHandle>
  </StyledSlider>
);
