import { FAQ } from '@/components/common/faq';
import { Layout } from '@/components/common/layout';
import { PageHeader } from '@/components/common/pageheader';
import { ContactForm, ContactLocations } from '@/components/contact';

import { contactFaq, contactHeader, locations } from '@/data/contact';

export default function ContactPageOne() {
  return (
    <Layout>
      <PageHeader
        variant='full'
        {...contactHeader}
      />
      <ContactForm />
      <ContactLocations {...locations} />
      <FAQ {...contactFaq} />
    </Layout>
  );
}
