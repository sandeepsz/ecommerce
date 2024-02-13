import { Layout } from '@/components/common/layout';
import { PageHeader } from '@/components/common/pageheader';
import { FAQ } from '@/components/common/faq';

import { faqHeader, paymentFaq, shoppingFaq } from '@/data/faq';

export default function FAQPage() {
  return (
    <Layout>
      <PageHeader
        variant='full'
        {...faqHeader}
      />
      <FAQ {...shoppingFaq} />
      <FAQ {...paymentFaq} />
    </Layout>
  );
}
