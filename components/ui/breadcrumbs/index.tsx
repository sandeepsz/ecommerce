import { useTheme } from 'styled-components';

import Text from '@/ui/text';
import Icon from '@/components/icons';
import { StyledLink } from './styles';
import { Space } from 'antd';

type BreadcrumbsProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const theme = useTheme();

  return (
    <Space size={16}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`}>
            <StyledLink href={item.href}>
              <Text
                size='12'
                color={isLast ? 'black' : theme.token.black6}
              >
                {item.label}
              </Text>
              {!isLast && (
                <Icon
                  type='chevron-right'
                  size={12}
                />
              )}
            </StyledLink>
          </div>
        );
      })}
    </Space>
  );
};
