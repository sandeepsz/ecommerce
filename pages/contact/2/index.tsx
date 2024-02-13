import { FAQ } from '@/components/common/faq';
import { Layout } from '@/components/common/layout';
import { PageHeader } from '@/components/common/pageheader';
import { ContactForm2 } from '@/components/contact';

import { contactFaq, contactHeader } from '@/data/contact';

export default function ContactPageOne() {
  return (
    <Layout>
      <PageHeader
        variant='simple'
        {...contactHeader}
      />
      <ContactForm2 />
      <FAQ {...contactFaq} />
    </Layout>
  );
}
