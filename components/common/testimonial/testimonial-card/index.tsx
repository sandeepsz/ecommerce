import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Text, { ButtonText } from '@/ui/text';
import Rating from '@/ui/rating';
import SizedBox from '@/ui/sized-box';

import type { TestimonialCardProp } from '@/types';

import { StyledCustomer, StyledTestimonalCard } from './style';
import { Avatar } from '@/ui/avatar';

export type TestimonialCardPropsT = Omit<TestimonialCardProp, 'productName'> & {
  height?: number;
  width?: number;
} & (
    | {
        variant?: 1;
        // required for variant 1
        productName: string;
      }
    | {
        variant?: 2;
        // not used for variant 2
        productName?: string;
      }
    | {
        variant?: 3;
        // not used for variant 3
        productName?: string;
      }
  );

export const TestimonialCard = ({
  variant = 1,
  customer,
  rating,
  productName,
  testimonial,
  height,
  width,
}: TestimonialCardPropsT) => {
  const theme = useTheme();

  return (
    <StyledTestimonalCard
      variant={variant}
      height={height}
      width={width}
    >
      <StyledCustomer variant={variant}>
        <Avatar
          src={customer.avatar}
          alt={customer.name}
        />
        <Box>
          <ButtonText size='medium'>{customer.name}</ButtonText>
          <Rating
            color='orange'
            value={rating}
            disabled
            allowHalf
          />
        </Box>
      </StyledCustomer>

      <SizedBox height={16} />
      {variant === 1 && (
        <>
          <Text
            size='16'
            color={theme.token.black5}
          >
            {productName}
          </Text>
          <SizedBox height={8} />
        </>
      )}
      {variant !== 3 && <Text size='16'>{testimonial}</Text>}
      {variant === 3 && (
        <Text
          // size={variant === 3 ? '26' : '16'}
          size='26'
          semibold
          style={{ maxWidth: 880, textAlign: 'center' }}
        >
          &quot;{testimonial}&quot;
        </Text>
      )}
    </StyledTestimonalCard>
  );
};
