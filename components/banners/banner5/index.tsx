import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import Image from 'next/image';
import { BannerProps } from '../type';
import { Content, ImageWrapper, Wrapper } from './styles';

export default function Banner5({
  title,
  subtitle,
  image,
  onClick,
  buttonText,
}: BannerProps) {
  const { md } = useBreakpoints();

  return (
    <Container>
      <Wrapper>
        <Content>
          <Heading as={md ? 'h4' : 'h6'}>{title}</Heading>
          <SizedBox height={md ? 13 : 8} />
          <Text size={md ? '18' : '14'}>{subtitle}</Text>
          <SizedBox height={md ? 24 : 12} />
          <Button
            type='underline'
            color='light'
            rightIcon='arrow'
            size={md ? 'medium' : 'small'}
            onClick={onClick}
          >
            {buttonText ?? 'Get Started'}
          </Button>
        </Content>
        <ImageWrapper>
          <Image
            src={image}
            alt={title}
            width={md ? 500 : 358}
            height={md ? 500 : 250}
            quality={100}
            style={{
              width: md ? '' : '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}
