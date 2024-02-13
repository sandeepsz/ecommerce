import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';

import { Form, Radio } from 'antd';
import { useTheme } from 'styled-components';

import Container from '@/ui/container';
import Heading from '@/ui/headings';
import Input, { type InputProps } from '@/ui/input';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';

import { Content, ImageWrapper, Wrapper } from './styles';

interface NewsletterProps {
  variant?: 1 | 2;
  fill?: 'outline' | 'solid';
  title?: ReactNode;
  subtitle?: ReactNode;
  border?: CSSProperties['border'];
  /**
   * size = 632 x 439
   */
  image?: string;
  inputProps?: InputProps;
}

export const Newsletter = ({
  variant = 1,
  fill = 'solid',
  title,
  subtitle,
  image,
  border,
  inputProps = {},
}: NewsletterProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Container>
      <Wrapper
        variant={variant}
        fill={fill}
        style={{
          minHeight: variant === 1 ? 439 : md ? 334 : 400,
          border,
        }}
      >
        {image && (
          <ImageWrapper variant={variant}>
            <Image
              src={image}
              alt='newsletter'
              fill
              style={{ objectFit: 'cover' }}
            />
          </ImageWrapper>
        )}
        <Content variant={variant}>
          <Heading
            as={md ? 'h4' : 'h6'}
            medium
          >
            {title ?? 'Subscribe to our newsletter'}
          </Heading>
          {subtitle && (
            <>
              <SizedBox height={8} />
              <Text size={md ? '18' : '14'}>{subtitle}</Text>
            </>
          )}
          <SizedBox
            height={variant === 1 ? { base: 16, md: 24 } : { base: 24, md: 32 }}
          />
          <Form
            layout='vertical'
            style={{
              width: '100%',
            }}
          >
            <Form.Item>
              <Input
                // TODO: fix this
                // @ts-ignore
                type='email'
                leftIcon='email'
                buttonText='Signup'
                variant='line'
                fullWidth
                style={{
                  ...(fill === 'outline' && {
                    borderBottom: `1px solid ${theme.token.black9}`,
                  }),
                }}
                placeholder={variant === 2 ? 'Email address' : ''}
                {...inputProps}
              />
            </Form.Item>
            {variant === 1 && (
              <>
                <SizedBox height={16} />
                <Form.Item>
                  <Radio>
                    <Text size='14'>I agree to receive marketing emails</Text>
                  </Radio>
                </Form.Item>
              </>
            )}
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};
