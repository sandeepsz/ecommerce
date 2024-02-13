import Image from 'next/image';
import Heading from '@/ui/headings';
import { type Category } from '@/components/cards/category';

import { StyledCategoryCard, StyledCategoryTag } from './styles';

export const CategoryCard3 = ({ href, image, name }: Category) => (
  <StyledCategoryCard href={href}>
    <Image
      src={image}
      alt={name}
      fill
      style={{
        objectFit: 'cover',
      }}
    />
    <StyledCategoryTag>
      <Heading as='h7'>{name}</Heading>
    </StyledCategoryTag>
  </StyledCategoryCard>
);
