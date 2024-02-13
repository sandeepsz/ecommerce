import { BannerProps } from '@/components/banners/type';

import { Banner3DataT } from '@/components/common/banner/banner-grid/banner-3';

export const bannerData9: [Banner3DataT, Banner3DataT, Banner3DataT] = [
  {
    title: 'Nairo Series®',
    tagline: 'Featured',
    image: {
      src: '/images/banner/nairo-bag.png',
      alt: 'nairo series',
    },
  },
  {
    title: 'Kensho Series®',
    tagline: 'New',
    image: {
      src: '/images/banner/kensho-bag.png',
      alt: 'kensho series',
    },
  },
  {
    title: 'Atarashi Series®',
    tagline: 'Handmade',
    image: {
      src: '/images/banner/atarashi-bag.png',
      alt: 'atarashi series',
    },
  },
];

export const bannerData2: [BannerProps, BannerProps, BannerProps] = [
  {
    title: 'Coats',
    image: '/images/banner/coat-large.png',
    buttonText: 'Explore',
  },
  {
    title: 'Purses',
    image: '/images/banner/handbag.png',
    buttonText: 'Explore',
  },
  {
    title: 'Accessories',
    image: '/images/banner/locket.png',
    buttonText: 'Explore',
  },
];

export const bannerData3: [BannerProps, BannerProps, BannerProps] = [
  {
    title: 'Kopla',
    image: '/images/banner/light.png',
    buttonText: 'Shop Now',
    hasArrow: true,
  },
  {
    title: 'Lola',
    image: '/images/banner/curve-chair.png',
    buttonText: 'Shop Now',
    hasArrow: true,
  },
  {
    title: 'Folka',
    image: '/images/banner/chair.png',
    buttonText: 'Shop Now',
    hasArrow: true,
  },
];

//
// TODO: update banner types
//
export type BannerDataT = {
  title: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
  };
};

export const bannerData5: [BannerDataT, BannerDataT] = [
  {
    title: 'Earrings',
    image: {
      src: '/images/banner/earrings-5.png',
      alt: 'earrings',
    },
    buttonText: 'See Collection',
  },
  {
    title: 'Necklaces',
    image: {
      src: '/images/banner/necklace-5.png',
      alt: 'necklace',
    },
    buttonText: 'See Collection',
  },
];

export const bannerData7: [BannerDataT, BannerDataT] = [
  {
    title: 'Splash',
    image: {
      src: '/images/banner/splash.png',
      alt: 'splash',
    },
    buttonText: 'See Collection',
  },
  {
    title: 'Hair Style',
    image: {
      src: '/images/banner/hair-style.png',
      alt: 'hair style',
    },
    buttonText: 'See Collection',
  },
];
