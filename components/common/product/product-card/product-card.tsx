import { type ReactNode } from 'react';
import Image from 'next/image';
import Link, { type LinkProps } from 'next/link';

import { Col, Row } from 'antd';
import { useTheme } from 'styled-components';

import Rating from '@/ui/rating';
import Text, { ButtonText } from '@/ui/text';
import AspectRatio from '@/ui/aspect-ratio';

import { formatPrice } from '@/utils/formatPrice';
import useBreakpoints from '@/utils/useBreakpoints';

import {
  StyledProductCard,
  StyledBadgeGroup,
  StyledProductCardContent,
} from './styles';

export type ProductCardProps = {
  position?: 'left' | 'center';
  height: number;
  width: number;
  name: string;
  price: string;
  priceStriked?: string;
  image: string;
  badge1?: ReactNode;
  badge2?: ReactNode;
  rating?: number;
  ratingColor?: 'orange';
  href: LinkProps['href'];
  rounded?: boolean;
};

export const ProductCard = ({
  position = 'left',
  height,
  width,
  name,
  price,
  priceStriked,
  image,
  href,
  badge1,
  badge2,
  rating,
  ratingColor,
  rounded = false,
}: ProductCardProps) => {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <StyledProductCard>
      <Link
        href={href}
        style={{ display: 'contents' }}
      >
        <AspectRatio
          ratio={width / height}
          style={{
            borderRadius: rounded ? '8px' : '0',
          }}
        >
          {(badge1 || badge2) && (
            <StyledBadgeGroup>
              {badge1}
              {badge2}
            </StyledBadgeGroup>
          )}

          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: 'cover', borderRadius: rounded ? '8px' : '0' }}
          />
        </AspectRatio>
        <StyledProductCardContent align={position}>
          {rating && (
            <Rating
              value={rating ?? 0}
              disabled
              allowHalf
              color={ratingColor}
            />
          )}
          <ButtonText size={md ? 'small' : 'xSmall'}>{name}</ButtonText>
          <Row gutter={12}>
            <Col>
              <Text
                semibold
                size={md ? '14' : '12'}
                color='black'
              >
                {formatPrice(Number(price))}
              </Text>
            </Col>
            <Col>
              <Text
                size={md ? '14' : '12'}
                color={theme.token.black4}
                strike
              >
                {formatPrice(Number(priceStriked))}
              </Text>
            </Col>
          </Row>
        </StyledProductCardContent>
      </Link>
    </StyledProductCard>
  );
};
