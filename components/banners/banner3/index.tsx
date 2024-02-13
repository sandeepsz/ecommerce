import Button from '@/ui/button';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import Image from 'next/image';
import { BannerProps } from '../type';
import { Content, ImageWrapper, Wrapper } from './styles';

export default function Banner3({
  image,
  subtitle,
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
          height={790}
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
        {subtitle && (
          <>
            {' '}
            <SizedBox height={md ? 12 : 8} />
            <Text size={md ? '18' : '14'}>{subtitle}</Text>
          </>
        )}
        <SizedBox height={12} />
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
