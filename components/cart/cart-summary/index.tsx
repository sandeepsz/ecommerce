import { useState } from 'react';

import { useTheme } from 'styled-components';
import { Radio, RadioChangeEvent, Space } from 'antd';

import Text, { ButtonText } from '@/ui/text';
import SizedBox from '@/ui/sized-box';
import Button from '@/ui/button';

import useBreakpoints from '@/utils/useBreakpoints';
import { formatPrice } from '@/utils/formatPrice';

import { InfoField, StyledCartSummary } from './styles';
import { RadioButton } from '@/ui/radio-button';

type CartSummaryProps = {
  title?: string;
  subtotal: number;
  total: number;
  shippingOptions?: {
    label: string;
    code: string;
    price: number;
    pricePrefix?: string;
  }[];
};

export const CartSummary = ({
  title,
  shippingOptions,
  subtotal,
  total,
}: CartSummaryProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();
  const [value, setValue] = useState<string>(shippingOptions?.[0]?.code || '');

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <StyledCartSummary>
      {title && <ButtonText>{title}</ButtonText>}
      {shippingOptions && (
        <>
          <SizedBox height={16} />
          <Radio.Group
            onChange={onChange}
            value={value}
            style={{ width: '100%' }}
          >
            <Space
              direction='vertical'
              size={md ? 12 : 20}
              style={{ width: '100%' }}
            >
              {shippingOptions.map((option) => (
                <RadioButton
                  key={option.code}
                  value={option.code}
                >
                  <Text size={md ? '16' : '14'}>{option.label}</Text>
                  <Text size={md ? '16' : '14'}>
                    {option.pricePrefix}
                    {formatPrice(option.price)}
                  </Text>
                </RadioButton>
              ))}
            </Space>
          </Radio.Group>
          <SizedBox height={16} />
        </>
      )}
      <InfoField>
        <Text
          size={md ? '16' : '14'}
          color={theme.token.black9}
        >
          Subtotal
        </Text>
        <Text
          size={md ? '16' : '14'}
          color={theme.token.black9}
          semibold
        >
          {formatPrice(subtotal)}
        </Text>
      </InfoField>
      <InfoField>
        <Text
          size={md ? '18' : '16'}
          color={theme.token.black9}
          semibold
        >
          Total
        </Text>
        <Text
          size={md ? '18' : '16'}
          color={theme.token.black9}
          semibold
        >
          {formatPrice(total)}
        </Text>
      </InfoField>
      <SizedBox height={md ? 32 : 24} />
      <Button
        size='medium'
        fullWidth
      >
        Checkout
      </Button>
    </StyledCartSummary>
  );
};
