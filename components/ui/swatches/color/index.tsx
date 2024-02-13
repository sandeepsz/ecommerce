import { Space, type SpaceProps } from 'antd';
import { useTheme } from 'styled-components';

import Text from '@/ui/text';
import Icon from '@/components/icons';

import { StyledClearButton } from '../styles';
import { Size, StyledColorSwatch, type Variant } from './styles';

type FilterItem = {
  key: string;
  color: string;
};

type ColorSwatchProps = SpaceProps & {
  title?: string;
  variant?: Variant;
  size?: Size;
  onClear?: () => void;
  activeKey: string;
  filters: FilterItem[];
  onFilterChange: ({ key }: { key: FilterItem['key'] }) => void;
};

export const ColorSwatch = ({
  title,
  variant = 'circle',
  size = 'large',
  onClear,
  activeKey,
  filters,
  ...rest
}: ColorSwatchProps) => {
  const theme = useTheme();

  return (
    <Space
      size={12}
      direction='vertical'
      style={{ width: '100%' }}
      {...rest}
    >
      {title && (
        <Text
          size='14'
          semibold
        >
          {title}
        </Text>
      )}
      <Space
        size={size === 'large' ? 12 : 8}
        style={{
          overflow: 'auto',
          width: '100%',
        }}
      >
        {filters.map(({ key, color }) => (
          <StyledColorSwatch
            key={key}
            variant={variant}
            size={size}
            color={color}
            isActive={activeKey === key}
          />
        ))}
      </Space>
      {onClear && (
        <StyledClearButton onClick={onClear}>
          <Icon
            type='close'
            size={14}
          />
          <Text
            size='12'
            semibold
            color={theme.token.black5}
          >
            Clear
          </Text>
        </StyledClearButton>
      )}
    </Space>
  );
};
