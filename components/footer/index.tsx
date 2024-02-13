import {
  aboutUs,
  columns,
  copyright,
  currencies,
  footerLinks,
  languages,
  paymentPartners,
} from '@/data/footer';
import { siteConfig } from '@/config/site';
import Box from '@/ui/box';
import Center from '@/ui/center';
import Container from '@/ui/container';
import Margin from '@/ui/margin';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import type { CollapseProps } from 'antd';
import { Col, Collapse, Divider, Row, Select } from 'antd';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import Icon from '../icons';
import { IconWrapper, SelectWrapper } from './styles';

export default function Footer({ variant = 1 }: { variant?: 1 | 2 }) {
  const theme = useTheme();
  const { md, lg, xl } = useBreakpoints();

  const collapsibleItems: CollapseProps['items'] = columns.map(
    ({ title, links }) => ({
      key: title,
      label: <ButtonText size='xSmall'>{title}</ButtonText>,
      children: links.map(({ title, href }, index) => (
        <Link
          href={href}
          key={title}
        >
          <Text
            size='14'
            style={{ marginTop: index !== 0 ? 12 : 0, whiteSpace: 'nowrap' }}
          >
            {title}
          </Text>
        </Link>
      )),
    })
  );

  return (
    <footer
      style={{
        backgroundColor: theme.token.black50,
      }}
    >
      <Container
        pt={{ base: 48, md: 72 }}
        pb={{ base: 24, md: 32 }}
        style={{ overflowX: 'hidden' }}
      >
        {variant === 1 && (
          <Row justify='space-between'>
            <Col style={{ maxWidth: 310 }}>
              <Icon
                type='logo'
                size={md ? 30 : 24}
              />
              <SizedBox height={16} />
              <Text size={md ? '16' : '14'}>{aboutUs}</Text>
              <SizedBox height={24} />
              {md && <Socials />}
            </Col>
            {lg && (
              <Col>
                <Row
                  justify='start'
                  gutter={xl ? 120 : 60}
                >
                  {columns.map(({ title, links }) => (
                    <Col key={title}>
                      <ButtonText size='xSmall'>{title}</ButtonText>
                      <SizedBox height={4} />
                      {links.map(({ title, href }, index) => (
                        <Link
                          href={href}
                          key={title}
                        >
                          <Text
                            size='14'
                            style={{ marginTop: 12, whiteSpace: 'nowrap' }}
                          >
                            {title}
                          </Text>
                        </Link>
                      ))}
                    </Col>
                  ))}
                </Row>
              </Col>
            )}
          </Row>
        )}

        {variant === 2 && (
          <Box
            textAlign={md ? 'center' : 'left'}
            margin={md ? '0 auto' : ''}
          >
            <Icon
              type='logo'
              size={md ? 30 : 24}
            />
            <SizedBox height={32} />
            <Row
              gutter={md ? [32, 0] : [0, 16]}
              justify={md ? 'center' : 'start'}
            >
              {footerLinks.map(({ title, href }) => (
                <Col
                  key={title}
                  span={md ? undefined : 24}
                >
                  <Link href={href}>
                    <Text
                      size='14'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {title}
                    </Text>
                  </Link>
                </Col>
              ))}
            </Row>
          </Box>
        )}

        <SizedBox height={{ base: 24, lg: 72 }} />

        {variant === 1 && !lg && (
          <Collapse
            ghost
            items={collapsibleItems}
            bordered
            expandIconPosition='end'
          />
        )}

        {lg && (
          <>
            <Divider style={{ margin: 0 }} />
            <SizedBox height={{ base: 0, lg: 24 }} />
            <Row
              justify='space-between'
              style={{ position: 'relative' }}
            >
              {variant === 2 && (
                <Col>
                  <Row
                    gutter={22}
                    align='middle'
                  >
                    {paymentPartners.map(({ src, alt }) => (
                      <Col key={alt}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={alt}
                          style={{
                            height: 19,
                            width: 'auto',
                            objectFit: 'contain',
                          }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              )}
              <Col
                style={
                  variant === 2
                    ? {
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }
                    : {}
                }
              >
                <Text size='14'>{copyright}</Text>
              </Col>
              <Col>
                <Dropdowns />
              </Col>
            </Row>
          </>
        )}

        {!lg && (
          <Center direction='column'>
            <Margin vertical={32}>
              <Dropdowns />
            </Margin>
            <Socials />
            <SizedBox height={16} />
            <Text size='12'>{copyright}</Text>
          </Center>
        )}
      </Container>
    </footer>
  );
}

function Socials() {
  return (
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
  );
}

function Dropdowns() {
  return (
    <SelectWrapper>
      <Row>
        <Col>
          <Select
            defaultValue={languages[0].value}
            suffixIcon={
              <Icon
                type='chevron-down'
                size={18}
              />
            }
          >
            {languages.map(({ title, value, icon }) => (
              <Select.Option
                value={value}
                key={value}
              >
                <Row
                  gutter={8}
                  align='middle'
                >
                  <Col>
                    <Icon
                      type={icon}
                      size={18}
                    />
                  </Col>
                  <Col>
                    <ButtonText size='xSmall'>{title}</ButtonText>
                  </Col>
                </Row>
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            defaultValue={currencies[0].value}
            suffixIcon={
              <Icon
                type='chevron-down'
                size={18}
              />
            }
          >
            {currencies.map(({ title, value }) => (
              <Select.Option
                value={value}
                key={value}
              >
                <ButtonText size='xSmall'>{title}</ButtonText>
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
    </SelectWrapper>
  );
}
