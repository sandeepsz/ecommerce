import { useTheme } from 'styled-components';

import { AboutPageHeader } from '@/components/about';
import { Feature } from '@/components/common/feature';
import { Layout } from '@/components/common/layout';
import {
  TestimonialCard,
  TestimonialCarousel,
} from '@/components/common/testimonial';
import IconBox from '@/components/grid/icon-box';
import Logos2 from '@/components/logos/logos2';

import { testimonial8 } from '@/data/testimonail';
import { services1 } from '@/data/services';

/**
 *
 * TODO: update navigation header color
 *
 */
const About2 = () => {
  const theme = useTheme();

  return (
    <Layout>
      <AboutPageHeader
        variant='2'
        background={{
          src: '/images/about/about-2-header.png',
          alt: 'About us',
        }}
        title='Our goal is to offer you the exclusive hand-picked products that will make your soul shine.'
      />

      <Logos2 />

      <Feature
        variant={5}
        images={[
          {
            src: '/images/about/about-2-featured-1.png',
            alt: 'plant',
          },
          {
            src: '/images/about/about-2-featured-2.png',
            alt: 'plant',
          },
        ]}
        title='Products made with love.'
        tagline='Tagline'
        subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
      />

      <TestimonialCarousel
        variant={2}
        testimonials={[...testimonial8, ...testimonial8]}
        renderTestimonial={(props) => <TestimonialCard {...props} />}
      />

      <Feature
        variant={3}
        images={[
          {
            src: '/images/about/about-2-featured-3.png',
            alt: 'designer',
          },
          {
            src: '/images/about/about-2-featured-4.png',
            alt: 'designer',
          },
        ]}
        title='Supporting local designers.'
        tagline='TRENDING'
        subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
      />

      <Feature
        variant={2}
        video={{
          src: 'https://www.youtube.com/embed/geFi-ZpN2ZM',
          thumbnail: {
            src: '/images/about/about-2-featured-thumbnail.png',
            alt: 'video thumbnail',
          },
        }}
        title='Feature Title'
        subtitle='Phosfluor escently engage worldwide with web-enabled process-centric technology.'
        background={theme.token.black50}
      />

      <IconBox items={services1} />
    </Layout>
  );
};

export default About2;
