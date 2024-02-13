import { ImageProps } from './commons';

export type BlogCardProps = {
  variant?: 1 | 2;
  title: string;
  href: string;
  description?: string;
  date?: string;
  image: ImageProps;
  position?: 'left' | 'center';
  readMore?: boolean;
};
