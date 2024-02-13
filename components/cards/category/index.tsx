import Heading from '@/ui/headings';
import useBreakpoints from '@/utils/useBreakpoints';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryTag, ImageWrapper, Wrapper } from './styles';

export interface Category {
  name: string;
  href: string;
  image: string;
  style?: React.CSSProperties;
}

export default function CategoryCard({ name, href, image, style }: Category) {
  const { md } = useBreakpoints();

  return (
    <Wrapper style={style}>
      <Link href={href}>
        <CategoryTag>
          <Heading as='h7'>{name}</Heading>
        </CategoryTag>
        <ImageWrapper>
          <Image
            src={image}
            alt={name}
            width={md ? 357 : 281}
            height={md ? 420 : 330}
            style={{
              objectFit: 'cover',
            }}
          />
        </ImageWrapper>
      </Link>
    </Wrapper>
  );
}
