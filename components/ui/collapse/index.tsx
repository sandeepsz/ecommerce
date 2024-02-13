import { type CollapseProps as AntdCollapseProps } from 'antd';

import Text from '@/components/ui/text';
import Icon from '@/components/icons';

import useBreakpoints from '@/utils/useBreakpoints';

import { StyledCollapse } from './styles';

type CollapseProps = Omit<
  AntdCollapseProps,
  'collapsible' | 'expandIcon' | 'expandIconPosition'
>;

export const Collapse = ({ items, ...rest }: CollapseProps) => {
  const { md } = useBreakpoints();

  const modifiedItems = items?.map((item) => ({
    ...item,
    label: (
      <Text
        size={md ? '18' : '16'}
        semibold
      >
        {item.label}
      </Text>
    ),
    children: <Text size={md ? '16' : '14'}>{item.children}</Text>,
  }));

  return (
    <StyledCollapse
      ghost
      collapsible='header'
      expandIcon={({ isActive }) => (
        <Icon
          type={isActive ? 'minus' : 'add'}
          size={md ? 28 : 24}
        />
      )}
      expandIconPosition='right'
      items={modifiedItems}
      {...rest}
    />
  );
};
