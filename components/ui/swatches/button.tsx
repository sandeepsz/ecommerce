import { Space, type SpaceProps } from 'antd';
import { useTheme } from 'styled-components';

import Text from '@/ui/text';
import Icon from '@/components/icons';

import { type Rounded, StyledButtonSwatch, StyledClearButton } from './styles';

type FilterItem = {
  key: string;
  label: string;
};

type ButtonSwatchProps = SpaceProps & {
  title?: string;
  rounded?: Rounded;
  onClear?: () => void;
  activeKey: string;
  filters: FilterItem[];
  onFilterChange: ({ key }: { key: FilterItem['key'] }) => void;
};

export const ButtonSwatch = ({
  title,
  rounded = 'sharp',
  onClear,
  activeKey,
  filters,
  ...rest
}: ButtonSwatchProps) => {
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
        size={16}
        style={{
          overflow: 'auto',
          width: '100%',
        }}
      >
        {filters.map(({ key, label }) => (
          <StyledButtonSwatch
            key={key}
            isActive={activeKey === key}
            rounded={rounded}
          >
            <Text size='14'>{label}</Text>
          </StyledButtonSwatch>
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
