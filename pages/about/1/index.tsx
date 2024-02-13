import { useTheme } from 'styled-components';

import { AboutPageHeader } from '@/components/about';
import { Feature } from '@/components/common/feature';
import { Layout } from '@/components/common/layout';
import {
  TestimonialCard,
  TestimonialCarousel,
} from '@/components/common/testimonial';
import IconBox from '@/components/grid/icon-box';
import Logos1 from '@/components/logos/logos1';

import { testimonial4 } from '@/data/testimonail';
import { services1 } from '@/data/services';

import { logos } from '@/data/logos';

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
        background={{
          src: '/images/about/about-1-header.png',
          alt: 'About us',
        }}
        title='Hand-picked cultural products that will make you shine.'
      />
      <Feature
        variant={6}
        image={{
          src: '/images/about/about-1-featured-1.png',
          alt: 'plant',
        }}
        title='Handmade garments by independant brands'
        tagline='THE COMPANY'
        subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
      />
      <Logos1
        title='Lovable brands'
        subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqu.'
        logos={logos}
      />
      <Feature
        variant={7}
        image={{
          src: '/images/about/about-1-featured-2.png',
          alt: 'plant',
        }}
        title='Handmade garments by independant brands'
        tagline='OUR MISSION'
        subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
      />
      <TestimonialCarousel
        variant={1}
        testimonials={[...testimonial4, ...testimonial4]}
        title='Create your dream shop in a glance with Nayzak theme.'
        subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.'
        renderTestimonial={(props) => (
          <TestimonialCard
            variant={2}
            {...props}
          />
        )}
      />
      <IconBox items={services1} />
    </Layout>
  );
};

export default About2;
