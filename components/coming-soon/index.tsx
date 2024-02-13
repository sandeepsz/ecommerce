import Image from 'next/image';

import { Col, Row, Space } from 'antd';
import { useTheme } from 'styled-components';

import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import Text from '@/ui/text';
import Input from '@/ui/input';
import { Countdown } from '@/ui/countdown';

import Icon from '@/components/icons';
import { IconWrapper } from '@/components/footer/styles';

import useBreakpoints from '@/utils/useBreakpoints';
import { siteConfig } from '@/config/site';

import { StyledContent, StyledImagePlaceholder } from './styles';

type ComingSoonProps = {
  image: {
    src: string;
    alt: string;
  };
  countdown: string;
};

export const ComingSoon = ({ image, countdown }: ComingSoonProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  const NOW_IN_MS = new Date().getTime();
  const TIME_LEFT_IN_MS = NOW_IN_MS + Number(countdown);

  return (
    <Container py={0}>
      <Row gutter={32}>
        <Col
          span={24}
          md={12}
        >
          <StyledImagePlaceholder>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </StyledImagePlaceholder>
        </Col>
        <Col
          span={24}
          md={8}
          offset={md ? 1 : 0}
        >
          <StyledContent>
            <Icon
              type='logo'
              size={30}
            />
            <Space
              size={24}
              direction='vertical'
            >
              <Heading as={md ? 'h4' : 'h6'}>Launching in</Heading>
              <Countdown
                variant='1'
                timeleftinms={TIME_LEFT_IN_MS}
              />
            </Space>
            <Space
              size={24}
              direction='vertical'
            >
              <Text
                size={md ? '16' : '14'}
                color={theme.token.black9}
              >
                Get notified when we go live.
              </Text>
              <Space
                size={16}
                direction='vertical'
                style={{ width: '100%' }}
              >
                <Input
                  fullWidth
                  placeholder='Your username or email'
                />
                <Button
                  fullWidth
                  size={md ? 'medium' : 'small'}
                >
                  Get notified
                </Button>
              </Space>
            </Space>
            <Row gutter={16}>
              {siteConfig.socials.map(({ icon, href }) => (
                <Col key={href}>
                  <a
                    href={href}
                    target='_blank'
                  >
                    <IconWrapper>
                      <Icon
                        type={icon}
                        size={18}
                      />
                    </IconWrapper>
                  </a>
                </Col>
              ))}
            </Row>
          </StyledContent>
        </Col>
      </Row>
    </Container>
  );
};
