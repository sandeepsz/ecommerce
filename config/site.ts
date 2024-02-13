import { IconType } from '@/components/icons';

type SiteConfig = {
  currency: {
    code: string;
    symbol: string;
  };
  socials: {
    icon: IconType;
    href: string;
  }[];
};

export const siteConfig: SiteConfig = {
  currency: {
    code: 'USD',
    symbol: '$',
  },
  socials: [
    {
      icon: 'facebook',
      href: 'https://www.facebook.com/someone/',
    },
    {
      icon: 'twitter',
      href: 'https://twitter.com/someone/',
    },
    {
      icon: 'instagram',
      href: 'https://www.instagram.com/someone/',
    },
    {
      icon: 'email',
      href: 'mailto:someone@someone.com',
    },
  ],
};
