import { FAQProps } from '@/components/common/faq';
import { ContactLocationsProps } from '@/components/contact/contact-locations';

export const contactHeader = {
  title: 'Contact us',
  description:
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.',
  breadcrumbs: true,
  background: {
    src: '/images/backgrounds/shop-header-1.png',
    alt: 'Shop 1',
  },
};

export const contactFaq: FAQProps = {
  title: 'Frequently asked',
  items: [
    {
      key: '1',
      label: 'How does Nayzak work?',
      children:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
    },
    {
      key: '2',
      label: 'Which payment methods are accepted?',
      children:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
    },
    {
      key: '3',
      label: 'How to get familiar with Figma?',
      children:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
    },
    {
      key: '4',
      label: 'Can I get a refund?',
      children:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
    },
  ],
};

export const locations: ContactLocationsProps = {
  tagline: 'Our locations',
  title: 'Come for a coffee, we’d love to chat!',
  subtitle:
    'All good things starts with a homepage. Get inspired without breaking your wallet with premium Figma and Sketch templates.',
  addressList: [
    {
      country: 'Netherlands',
      address: {
        street1: 'Suite 101 Nayzak Street',
        street2: 'London REU UK',
      },
    },
    {
      country: 'Netherlands',
      address: {
        street1: 'Suite 101 Nayzak Street',
        street2: 'London REU UK',
      },
    },
    {
      country: 'Japan',
      address: {
        street1: 'Suite 101 Nayzak Street',
        street2: 'London REU UK',
      },
    },
    {
      country: 'Japan',
      address: {
        street1: 'Suite 101 Nayzak Street',
        street2: 'London REU UK',
      },
    },
    {
      country: 'United States',
      address: {
        street1: 'Suite 101 Nayzak Street',
        street2: 'London REU UK',
      },
    },
    {
      country: 'United States',
      address: {
        street1: 'Suite 101 Nayzak Street',
        street2: 'London REU UK',
      },
    },
  ],
};
