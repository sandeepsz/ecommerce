import { useTheme } from 'styled-components';
import { Space } from 'antd';

import { Badge } from '@/ui/badge';
import Text from '@/ui/text';
import Icon from '@/components/icons';

import { StyledClearButton } from './styles';

export const FilterButtons = ({ filters }: { filters: string[] }) => {
  const theme = useTheme();

  return (
    <Space
      size={16}
      style={{
        width: '100%',
        overflow: 'auto',
      }}
    >
      {filters.map((filter) => (
        <Badge
          key={filter}
          leftIcon={
            <Icon
              type='close'
              size={14}
            />
          }
          style={{
            background: theme.token.black1,
            border: `1px solid ${theme.token.black2}`,
          }}
          roundness='rounded'
          size='small'
          text={filter}
        />
      ))}

      <StyledClearButton>
        <Icon
          type='close'
          size={14}
        />
        <Text
          size='12'
          semibold
          color={theme.token.black5}
        >
          Clear All
        </Text>
      </StyledClearButton>
    </Space>
  );
};
