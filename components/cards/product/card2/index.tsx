import AspectRatio from '@/ui/aspect-ratio';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import { ProductCardProps } from '../type';
import { Content, Label, Wrapper } from './styles';

export default function ProductCard2({
  label,
  image,
  name,
  price,
  href,
  crossedPrice,
}: ProductCardProps) {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <Wrapper>
      <Link href={href}>
        <AspectRatio
          ratio={424 / 565}
          style={{
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <Image
            src={image}
            alt={name}
            width={424}
            height={565}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </AspectRatio>
        <Content>
          <SizedBox height={12} />
          <ButtonText size={md ? 'small' : 'xSmall'}>{name}</ButtonText>
          <SizedBox height={4} />
          <Row
            gutter={12}
            justify='center'
          >
            <Col>
              <Text
                semibold
                size={md ? '14' : '12'}
              >
                {price}
              </Text>
            </Col>
            <Col>
              <Text
                size={md ? '14' : '12'}
                color={theme.token.black4}
                strike
              >
                {crossedPrice}
              </Text>
            </Col>
          </Row>
        </Content>
      </Link>
      {label && (
        <Label isNew={label?.toLowerCase() === 'new'}>
          <Text
            size={md ? '14' : '12'}
            semibold
            color={label?.toLowerCase() === 'new' ? undefined : 'white'}
          >
            {' '}
            {label}
          </Text>
        </Label>
      )}
    </Wrapper>
  );
}
