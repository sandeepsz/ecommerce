import Box from '@/ui/box';
import Text, { ButtonText } from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { Checkbox, Form, Radio, Space } from 'antd';
import { StyledCard, StyledCardTitle, StyledDividerText } from './styles';
import { useTheme } from 'styled-components';
import Button from '@/ui/button';
import { ComponentProps, Fragment, ReactNode, useState } from 'react';
import SizedBox from '@/ui/sized-box';
import Input from '@/ui/input';
import { RadioButton } from '@/ui/radio-button';
import { formatPrice } from '@/utils/formatPrice';

/**
 *
 * TODO: add country selector
 *
 */

const VSpace = ({ style, ...rest }: ComponentProps<typeof Space>) => (
  <Space
    direction='vertical'
    style={{ width: '100%', ...style }}
    {...rest}
  />
);

type CheckoutFormProps = {
  children?: ReactNode;
  shippingMethods: {
    label: string;
    code: string;
    price: number;
    pricePrefix?: string;
  }[];
  paymentMethods: {
    label: string;
    code: string;
    icon?: ReactNode;
  }[];
};

export const CheckoutForm = ({
  shippingMethods,
  paymentMethods,
  children,
}: CheckoutFormProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    shippingMethods[0].code
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0].code
  );

  return (
    <VSpace size={md ? 24 : 16}>
      <Box
        display='flex'
        justifyContent='center'
      >
        <Text size={md ? '18' : '14'}>Returning customer?</Text>&nbsp;
        <Text
          size={md ? '18' : '14'}
          semibold
        >
          Click here to login
        </Text>
      </Box>
      <VSpace size={12}>
        <StyledCard style={{ marginTop: md ? 22 : 20 }}>
          <StyledCardTitle>
            <Text size={md ? '16' : '14'}>Express Checkout</Text>
          </StyledCardTitle>
          <VSpace size={16}>
            <Button
              size={md ? 'xLarge' : 'medium'}
              style={{
                background: theme.token.mango,
                borderColor: theme.token.mango,
              }}
              roundness='rounded'
              fullWidth
              type='square'
            >
              paypal
            </Button>
            <Button
              fill='outline'
              size={md ? 'xLarge' : 'medium'}
              style={{
                borderColor: theme.token.black3,
              }}
              roundness='rounded'
              fullWidth
              type='square'
            >
              gpay
            </Button>
          </VSpace>
        </StyledCard>
        <StyledDividerText>
          <Text
            size={'16'}
            color={theme.token.black5}
          >
            OR
          </Text>
        </StyledDividerText>
      </VSpace>

      {/* Form */}
      <Form>
        <VSpace size={md ? 24 : 16}>
          {/* Contact information */}
          <StyledCard>
            <ButtonText size={md ? 'large' : 'medium'}>
              Contact information
            </ButtonText>
            <SizedBox height={md ? 24 : 16} />
            <Box
              display='flex'
              flexDirection={md ? 'row' : 'column'}
              gap={md ? 32 : 12}
            >
              <Form.Item
                name='firstname'
                style={{ width: '100%' }}
              >
                <Input
                  fullWidth
                  labelText='First name'
                  placeholder='First name'
                />
              </Form.Item>
              <Form.Item
                name='lastname'
                style={{ width: '100%' }}
              >
                <Input
                  fullWidth
                  labelText='Last name'
                  placeholder='Last name'
                />
              </Form.Item>
            </Box>
            <SizedBox height={md ? 32 : 12} />
            <Form.Item
              name='emailaddress'
              style={{ width: '100%' }}
            >
              <Input
                fullWidth
                labelText='Email address'
                placeholder='Email address'
              />
            </Form.Item>
          </StyledCard>

          {/* Shipping address */}
          <StyledCard>
            <ButtonText size={md ? 'large' : 'medium'}>
              Shipping address
            </ButtonText>
            <SizedBox height={md ? 24 : 16} />
            <VSpace size={md ? 32 : 12}>
              <Form.Item
                name='streetaddress'
                style={{ width: '100%' }}
                rules={[
                  { required: true, message: 'Please enter street address!' },
                ]}
              >
                <Input
                  fullWidth
                  labelText='Street address *'
                  placeholder='Street address'
                />
              </Form.Item>
              {/**
               *
               * TODO: add country selector
               *
               */}
              <Form.Item
                name='country'
                style={{ width: '100%' }}
                rules={[{ required: true, message: 'Please enter country!' }]}
              >
                <Input
                  fullWidth
                  labelText='Country *'
                  placeholder='Country'
                  rightIcon='chevron-down'
                />
              </Form.Item>
              <Form.Item
                name='towncity'
                style={{ width: '100%' }}
                rules={[
                  { required: true, message: 'Please enter town / city!' },
                ]}
              >
                <Input
                  fullWidth
                  labelText='Town / City *'
                  placeholder='Town / City'
                />
              </Form.Item>
              <Box
                display='flex'
                flexDirection={md ? 'row' : 'column'}
                gap={md ? 32 : 12}
              >
                <Form.Item
                  name='state'
                  style={{ width: '100%' }}
                >
                  <Input
                    fullWidth
                    labelText='State'
                    placeholder='State'
                  />
                </Form.Item>
                <Form.Item
                  name='zipcode'
                  style={{ width: '100%' }}
                >
                  <Input
                    fullWidth
                    labelText='Zip code'
                    placeholder='Zip code'
                  />
                </Form.Item>
              </Box>
            </VSpace>
            <SizedBox height={md ? 24 : 16} />
            <Form.Item
              name='remember'
              valuePropName='checked'
            >
              <Space>
                <Checkbox />
                <Text
                  size={md ? '16' : '14'}
                  color={theme.token.black6}
                >
                  Use a different billing address (optional)
                </Text>
              </Space>
            </Form.Item>
          </StyledCard>

          {/* Shipping method */}
          <StyledCard>
            <ButtonText size={md ? 'large' : 'medium'}>
              Shipping method
            </ButtonText>
            <SizedBox height={md ? 24 : 16} />
            <Radio.Group
              onChange={(e) => {
                setSelectedShippingMethod(e.target.value);
              }}
              value={selectedShippingMethod}
              style={{ width: '100%' }}
            >
              <Space
                direction='vertical'
                size={md ? 24 : 16}
                style={{ width: '100%' }}
              >
                {shippingMethods.map(({ code, label, price, pricePrefix }) => (
                  <RadioButton
                    key={code}
                    value={code}
                  >
                    <Text size={md ? '16' : '14'}>{label}</Text>
                    <Text size={md ? '16' : '14'}>
                      {formatPrice(price, pricePrefix)}
                    </Text>
                  </RadioButton>
                ))}
              </Space>
            </Radio.Group>
          </StyledCard>

          {/* order summary (olny for small screens) */}
          {children}

          {/* Payment information */}
          <StyledCard>
            <ButtonText size={md ? 'large' : 'medium'}>
              Payment information
            </ButtonText>
            <SizedBox height={md ? 24 : 16} />
            <Radio.Group
              onChange={(e) => {
                setSelectedPaymentMethod(e.target.value);
              }}
              value={selectedPaymentMethod}
              style={{ width: '100%' }}
            >
              <Space
                direction='vertical'
                size={md ? 24 : 16}
                style={{ width: '100%' }}
              >
                {paymentMethods.map(({ code, label, icon }) => (
                  <Box key={code}>
                    <RadioButton value={code}>
                      <Text
                        size={md ? '16' : '14'}
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {label}
                      </Text>
                      {icon}
                    </RadioButton>
                    {selectedPaymentMethod === code && code === 'card' && (
                      <VSpace
                        size={16}
                        style={{
                          paddingTop: 16,
                          paddingBottom: md ? 32 : 0,
                          borderBottom: md
                            ? `1px solid ${theme.token.black3}`
                            : 'none',
                        }}
                      >
                        <Form.Item
                          name='cardnumber'
                          style={{ width: '100%' }}
                          rules={[
                            {
                              required: true,
                              message: 'Please enter card number!',
                            },
                          ]}
                        >
                          <Input
                            fullWidth
                            labelText='Card number'
                            placeholder='1234 1234 1234'
                          />
                        </Form.Item>
                        <Box
                          display='flex'
                          gap={md ? 32 : 12}
                        >
                          <Form.Item
                            name='expirydate'
                            style={{ width: '100%' }}
                            rules={[
                              {
                                required: true,
                                message: 'Please enter expiry date!',
                              },
                            ]}
                          >
                            <Input
                              fullWidth
                              labelText='Expiry date'
                              placeholder='MM/YY'
                            />
                          </Form.Item>
                          <Form.Item
                            name='cvccode'
                            style={{ width: '100%' }}
                            rules={[
                              {
                                required: true,
                                message: 'Please enter CVC code!',
                              },
                            ]}
                          >
                            <Input
                              fullWidth
                              labelText='CVC code'
                              placeholder='CVC code'
                            />
                          </Form.Item>
                        </Box>
                      </VSpace>
                    )}
                  </Box>
                ))}
              </Space>
            </Radio.Group>
          </StyledCard>

          <VSpace size={16}>
            <Text
              size={md ? '16' : '14'}
              color={theme.token.black5}
            >
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our&nbsp;
              <span style={{ color: theme.token.black9 }}>privacy policy.</span>
            </Text>
            <Form.Item>
              <Button
                fullWidth
                htmlType='submit'
                size={md ? 'large' : 'medium'}
              >
                Place order
              </Button>
            </Form.Item>
          </VSpace>
        </VSpace>
      </Form>
    </VSpace>
  );
};
