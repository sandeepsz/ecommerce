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

export const CategoryCard1 = ({
  image,
  name,
  href,
  itemsCount,
}: CategoryProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Link href={href}>
      <Box position='relative'>
        <Image
          src={image.src}
          alt={image.alt}
          height={md ? 420 : 329}
          width={md ? 357 : 281}
        />
        <Button
          fill='solid'
          color='dark'
          roundness='pill'
          type='square'
          size='xSmall'
          style={{ position: 'absolute', bottom: 24, right: 24 }}
        >
          arrow
        </Button>
      </Box>
      <SizedBox height={md ? 12 : 8} />
      {md ? (
        <>
          <Heading as='h7'>{name}</Heading>
          <SizedBox height={4} />
        </>
      ) : (
        <ButtonText size='medium'>{name}</ButtonText>
      )}
      {itemsCount && (
        <Text
          size={md ? '14' : '12'}
          color={theme.token.black5}
        >
          {itemsCount} items
        </Text>
      )}
    </Link>
  );
};
