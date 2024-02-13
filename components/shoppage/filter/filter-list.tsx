import { Space } from 'antd';
import { useTheme } from 'styled-components';

import Text from '@/ui/text';
import { UnstyledButton } from '@/ui/button/styles';
import { StyledList } from './styles';

type FitlerItem = {
  key: string;
  label: string;
};

type FilterListProps = {
  title: string;
  activeKey: FitlerItem['key'];
  filters: FitlerItem[];
  onFilterChange: ({ key }: { key: FitlerItem['key'] }) => void;
  scrollable?: boolean;
};

export const FilterList = ({
  title,
  activeKey,
  filters,
  onFilterChange,
  scrollable = false,
}: FilterListProps) => {
  const theme = useTheme();

  return (
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
      <StyledList
        size={12}
        direction='vertical'
        scrollable={scrollable}
      >
        {filters.map(({ key, label }) => (
          <UnstyledButton
            key={key}
            onClick={() => {
              onFilterChange({ key });
            }}
          >
            <Text
              size='14'
              semibold
              color={activeKey === key ? 'black' : theme.token.black5}
              style={{
                ...(activeKey === key && {
                  borderBottom: `1px solid black`,
                }),
              }}
            >
              {label}
            </Text>
          </UnstyledButton>
        ))}
      </StyledList>
    </Space>
  );
};
