import { Space } from 'antd';

import Text from '@/ui/text';
import { StyledSlider } from './styles';

type FilterSliderProps = {
  title: string;
  valuePrefix: string;
  currentMin: number;
  currentMax: number;
  min: number;
  max: number;
  step: number;
  onChange: ({ min, max }: { min: number; max: number }) => void;
};

export const FilterSlider = ({
  title,
  valuePrefix,
  currentMin,
  currentMax,
  min,
  max,
  step,
  onChange,
}: FilterSliderProps) => (
  <Space
    size={16}
    direction='vertical'
    style={{ width: '100%' }}
  >
    <Text
      size='14'
      semibold
      color='black'
    >
      {title}
    </Text>
    <Space
      size={8}
      direction='vertical'
      style={{ width: '100%', textAlign: 'center' }}
    >
      <StyledSlider
        range
        step={step}
        min={min}
        max={max}
        defaultValue={[currentMin, currentMax]}
        onAfterChange={([min, max]) => {
          onChange({ min, max });
        }}
      />
      <Text size='14'>{`${valuePrefix}${currentMin} - ${valuePrefix}${currentMax}`}</Text>
    </Space>
  </Space>
);
