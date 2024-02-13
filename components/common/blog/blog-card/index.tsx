import Image from 'next/image';

import Button from '@/ui/button';
import Text from '@/ui/text';
import Heading from '@/ui/headings';

import useBreakpoints from '@/utils/useBreakpoints';

import {
  StyledBlogCard,
  StyledBlogCardContent,
  StyledImagePlaceholder,
} from './styles';

import { BlogCardProps } from '@/types';
import { useTheme } from 'styled-components';
import Link from 'next/link';

export type BlogCardPropsT = BlogCardProps & {
  height?: number;
  width?: number;
};

export const BlogCard = ({
  variant = 1,
  title,
  href,
  date,
  description,
  position = 'left',
  image,
  width,
  height,
  readMore = true,
}: BlogCardPropsT) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <StyledBlogCard variant={variant}>
      <Link
        href={href}
        style={{ display: 'contents' }}
      >
        <StyledImagePlaceholder
          height={height}
          width={width}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </StyledImagePlaceholder>
        <StyledBlogCardContent position={position}>
          {date && (
            <Text
              size={md ? '14' : '12'}
              color={theme.token.black5}
            >
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          )}
          <Heading as='h7'>{title}</Heading>
          <Text size={md ? '14' : '12'}>{description}</Text>
          {readMore && (
            <Button
              type='underline'
              size={md ? 'small' : 'xSmall'}
            >
              Read more
            </Button>
          )}
        </StyledBlogCardContent>
      </Link>
    </StyledBlogCard>
  );
};
