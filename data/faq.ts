import { type FAQProps } from '@/components/common/faq';

export const faqHeader = {
  title: 'FAQ',
  description:
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.',
  breadcrumbs: true,
  background: {
    src: '/images/backgrounds/shop-header-1.png',
    alt: 'Shop 1',
  },
};

export const shoppingFaq: FAQProps = {
  title: 'Shopping FAQ',
  defaultActiveKey: '1',
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

export const paymentFaq: FAQProps = {
  title: 'Shopping FAQ',
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
