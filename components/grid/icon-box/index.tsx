import { Fragment } from 'react';
import Icon, { IconType } from '@/components/icons';
import Container from '@/ui/container';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { Col, Divider, Row } from 'antd';
import { useTheme } from 'styled-components';

export interface IconBoxItemProps {
  icon: IconType;
  title: string;
  subtitle: string;
}

interface IconBoxProps {
  variant?: 2;
  items: IconBoxItemProps[];
}

export default function IconBox({ items }: IconBoxProps) {
  const theme = useTheme();
  const { md, lg } = useBreakpoints();

  return (
    <Container py={{ base: 32, lg: 52 }}>
      <Row
        justify='space-between'
        align='middle'
        wrap={lg ? false : true}
        gutter={lg ? undefined : [31, 30]}
      >
        {items.map(({ title, icon, subtitle }, index) => (
          <Fragment key={title}>
            <Col span={lg ? undefined : 12}>
              <Row
                gutter={lg ? 12 : 8}
                wrap={lg ? false : true}
                align={lg ? 'top' : 'middle'}
                justify={lg ? 'start' : 'center'}
                style={{ textAlign: lg ? 'left' : 'center' }}
              >
                <Col span={lg ? undefined : 24}>
                  <Icon
                    type={icon}
                    size={32}
                  />
                </Col>
                <Col flex='auto'>
                  <ButtonText
                    style={{ whiteSpace: 'nowrap' }}
                    size={md ? 'medium' : 'xSmall'}
                  >
                    {title}
                  </ButtonText>
                  <SizedBox height={{ base: 0, md: 2 }} />
                  <Text
                    size={md ? '14' : '12'}
                    color={theme.token.black5}
                  >
                    {subtitle}
                  </Text>
                </Col>
              </Row>
            </Col>
            {lg && index != items.length - 1 && (
              <Col key={index}>
                <Divider
                  orientation='center'
                  type='vertical'
                  style={{ height: '135px' }}
                />
              </Col>
            )}
          </Fragment>
        ))}
      </Row>
    </Container>
  );
}
