import Image from 'next/image';

import { Space } from 'antd';
import { useTheme } from 'styled-components';

import Text from '@/ui/text';
import Box from '@/ui/box';
import Button from '@/ui/button';

import { ProductQuantityButton } from '@/components/common/product';

import { formatPrice } from '@/utils/formatPrice';

import { ProductCellProps, VariantProps } from '.';
import { StyledInfo, StyledProductInfo } from './styles';

type ProductCellInfoProps = VariantProps &
  Omit<ProductCellProps, 'price'> & {
    onQuantityIncrease: () => void;
    onQuantityDecrease: () => void;
  };

export const ProductCellInfo = ({
  switchMobile,
  id,
  name,
  image,
  quantity,
  subTotal,
  variant,
  onQuantityIncrease,
  onQuantityDecrease,
}: ProductCellInfoProps) => {
  const theme = useTheme();

  return (
    <>
      <StyledProductInfo switchMobile={switchMobile}>
        <Image
          src={image}
          alt={name}
          height={102}
          width={77}
        />
        <Box
          display='flex'
          alignItems='center'
          width='100%'
        >
          <Space
            size={8}
            direction='vertical'
            style={{ width: '100%' }}
          >
            <StyledInfo>
              <Text
                size='14'
                semibold
                color={theme.token.black9}
              >
                {name}
              </Text>
              {switchMobile === 'large' && (
                <Text
                  size='14'
                  semibold
                  color={theme.token.black9}
                >
                  {formatPrice(subTotal)}
                </Text>
              )}
            </StyledInfo>
            <StyledInfo>
              <Text
                size='12'
                color={theme.token.black6}
              >
                Size: {variant.size}, Color: {variant.color}
              </Text>
              {switchMobile === 'large' && (
                <Button
                  type='text'
                  size='xSmall'
                  leftIcon='trash'
                  iconSize={20}
                />
              )}
            </StyledInfo>
            {!switchMobile && (
              <Button
                type='text'
                size='xSmall'
                leftIcon='trash'
                iconSize={18}
              >
                <span style={{ color: theme.token.black6 }}>Remove</span>
              </Button>
            )}
            {switchMobile === 'large' && (
              <ProductQuantityButton
                quantity={quantity}
                onIncrease={onQuantityIncrease}
                onDecrease={onQuantityDecrease}
              />
            )}
            {switchMobile === 'small' && (
              <StyledInfo>
                <ProductQuantityButton
                  quantity={quantity}
                  onIncrease={onQuantityIncrease}
                  onDecrease={onQuantityDecrease}
                />
                <Space>
                  <Text
                    size='14'
                    semibold
                    color={theme.token.black9}
                  >
                    {formatPrice(subTotal)}
                  </Text>
                  <Button
                    type='text'
                    size='xSmall'
                    leftIcon='trash'
                    iconSize={20}
                  />
                </Space>
              </StyledInfo>
            )}
          </Space>
        </Box>
      </StyledProductInfo>
    </>
  );
};
