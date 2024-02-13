import Image from 'next/image';
import Link from 'next/link';

import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Button from '@/ui/button';
import SizedBox from '@/ui/sized-box';
import Heading from '@/ui/headings';
import Text, { ButtonText } from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

import type { CategoryProps } from '../types';

export const CategoryCard5 = ({
  image,
  name,
  href,
  itemsCount,
}: CategoryProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Link href={href}>
      <Box
        position='relative'
        borderRadius='50%'
        overflow='hidden'
      >
        <Image
          src={image.src}
          alt={image.alt}
          height={md ? 196 : 124}
          width={md ? 196 : 124}
        />
      </Box>
      <SizedBox height={md ? 12 : 4} />
      <ButtonText
        size={md ? 'medium' : 'small'}
        style={{ textAlign: 'center' }}
      >
        {name}
      </ButtonText>
      {md && <SizedBox height={4} />}
      {itemsCount && (
        <Text
          size={md ? '14' : '12'}
          color={theme.token.black5}
          style={{ textAlign: 'center' }}
        >
          {itemsCount} items
        </Text>
      )}
    </Link>
  );
};
