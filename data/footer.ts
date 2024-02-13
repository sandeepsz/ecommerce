import { IconType } from '@/components/icons';

export const columns: {
  title: string;
  links: { title: string; href: string }[];
}[] = [
  {
    title: 'Shop',
    links: [
      {
        title: 'My account',
        href: '/account',
      },
      {
        title: 'Login',
        href: '/login',
      },
      {
        title: 'Wishlist',
        href: '/wishlist',
      },
      {
        title: 'Cart',
        href: '/cart',
      },
    ],
  },
  {
    title: 'Information',
    links: [
      {
        title: 'Shipping Policy',
        href: '/shipping-policy',
      },
      {
        title: 'Returns & Refunds',
        href: '/returns-refunds',
      },
      {
        title: 'Cookies Policy',
        href: '/cookies-policy',
      },
      {
        title: 'Frequently Asked',
        href: '/frequently-asked',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About Us',
        href: '/about-us',
      },
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        title: 'Terms & Conditions',
        href: '/terms-conditions',
      },
      {
        title: 'Contact Us',
        href: '/contact-us',
      },
    ],
  },
];

export const footerLinks = [
  {
    title: 'About Us',
    href: '/about-us',
  },
  {
    title: 'My Account',
    href: '/account',
  },
  {
    title: 'Privacy',
    href: '/privacy',
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
  },
];

export const paymentPartners = [
  {
    src: '/images/payment-partners/mastercard.svg',
    alt: 'mastercard',
  },
  {
    src: '/images/payment-partners/paypal.svg',
    alt: 'paypal',
  },
  {
    src: '/images/payment-partners/visa.svg',
    alt: 'visa',
  },
  {
    src: '/images/payment-partners/g-pay.svg',
    alt: 'g-pay',
  },
  {
    src: '/images/payment-partners/apple-pay.svg',
    alt: 'apple-pay',
  },
];

export const languages: { title: string; value: string; icon: IconType }[] = [
  { title: 'English', value: 'en', icon: 'us' },
];

export const currencies = [
  {
    title: 'USD',
    value: 'USD',
  },
];

export const copyright = '© 2088 Nayzak Design';
export const aboutUs =
  'Phosf luorescently engage worldwide method process shopping.';
