import Link from 'next/link';
import Image from 'next/image';

import { Col, Row, Space } from 'antd';
import { useTheme } from 'styled-components';

import Rating from '@/ui/rating';
import Text, { ButtonText } from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import AspectRatio from '@/ui/aspect-ratio';
import SizedBox from '@/ui/sized-box';
import Button from '@/ui/button';
import { formatPrice } from '@/utils/formatPrice';
import { Noto_Sans_Indic_Siyaq_Numbers } from 'next/font/google';

type ProductListCardProps = {
  name: string;
  price: string;
  priceStriked?: string;
  image: string;
  href: string;
  rating?: number;
  description?: string;
  ratingColor?: 'orange';
};

export const ProductListCard = ({
  name,
  price,
  priceStriked,
  image,
  rating,
  ratingColor = 'orange',
  description,
  href,
}: ProductListCardProps) => {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <Row gutter={md ? 0 : [0, 12]}>
      <Col
        span={24}
        md={4}
      >
        <Link href={href}>
          <AspectRatio ratio={228 / 304}>
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </AspectRatio>
        </Link>
      </Col>
      <Col
        span={24}
        md={20}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ marginLeft: md ? 40 : 0 }}>
          <ButtonText size={md ? 'small' : 'xSmall'}>{name}</ButtonText>
          <SizedBox height={4} />
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
          {md && (
            <>
              <SizedBox height={16} />
              {rating && (
                <Rating
                  value={rating ?? 0}
                  disabled
                  allowHalf
                  color={ratingColor}
                />
              )}
              <SizedBox height={16} />
              <Text
                size='16'
                style={{ maxWidth: 612 }}
              >
                {description}
              </Text>
              <SizedBox height={24} />
              <Space
                size={16}
                direction='vertical'
              >
                <Button
                  size='xSmall'
                  fullWidth
                >
                  Select Options
                </Button>
                <Space size={32}>
                  <Button
                    type='text'
                    size='xSmall'
                    leftIcon='heart'
                    iconSize={14}
                  >
                    Wishlist
                  </Button>
                  <Button
                    type='text'
                    size='xSmall'
                    leftIcon='help'
                    iconSize={14}
                  >
                    Ask question
                  </Button>
                  <Button
                    type='text'
                    size='xSmall'
                    leftIcon='share'
                    iconSize={14}
                  >
                    Share
                  </Button>
                </Space>
              </Space>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
};
