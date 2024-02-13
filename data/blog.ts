import type { BlogCardProps } from '@/types';

type BlogCardData = Omit<BlogCardProps, 'variant' | 'position' | 'readMore'>;

type BlogSectionData = [BlogCardData, BlogCardData, BlogCardData];

export const blogSection3: BlogSectionData = [
  {
    title: 'minimal design is taking over',
    href: '/',
    image: {
      src: '/images/blog/minimal-design.png',
      alt: 'minimal design',
    },
  },
  {
    title: '5 ways to decorate your home',
    href: '/',
    image: {
      src: '/images/blog/decorate-home.png',
      alt: 'decorate home',
    },
  },
  {
    title: 'Plants and their home benefits',
    href: '/',
    image: {
      src: '/images/blog/plants-benefits.png',
      alt: 'plants benefits',
    },
  },
];

export const blogSection6: BlogSectionData = [
  {
    title: '3 ways to keep your plants fresh',
    href: '/',
    image: {
      src: '/images/blog/keep-plants-fresh.png',
      alt: 'keep plants fresh',
    },
    date: 'Sat Oct 12 2024 00:00:00 GMT+0000',
  },
  {
    title: 'Side table plants and their benefits',
    href: '/',
    image: {
      src: '/images/blog/plants-benefits.png',
      alt: 'plant benefits',
    },
    date: 'Sat Oct 12 2024 00:00:00 GMT+0000',
  },
  {
    title: 'Floral scent is the next big thing',
    href: '/',
    image: {
      src: '/images/blog/floral-scent.png',
      alt: 'floral scent',
    },
    date: 'Sat Oct 12 2024 00:00:00 GMT+0000',
  },
];
