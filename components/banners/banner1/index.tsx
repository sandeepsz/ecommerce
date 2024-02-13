import Button from '@/ui/button';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import useBreakpoints from '@/utils/useBreakpoints';
import Image from 'next/image';
import { BannerProps } from '../type';
import { Content, ImageWrapper, Wrapper } from './styles';

export default function Banner1({
  image,
  title,
  onClick,
  buttonText,
  hasArrow = false,
}: BannerProps) {
  const { md } = useBreakpoints();

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={image}
          alt={title}
          width={652}
          height={379}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </ImageWrapper>
      <Content>
        <Heading
          as={md ? 'h5' : 'h7'}
          medium
        >
          {title}
        </Heading>
        <SizedBox height={{ base: 4, md: 12 }} />
        <Button
          type='underline'
          color='light'
          size={md ? 'small' : 'xSmall'}
          onClick={onClick}
          rightIcon={hasArrow ? 'arrow' : undefined}
        >
          {buttonText ?? 'Get Started'}
        </Button>
      </Content>
    </Wrapper>
  );
}
