import { useTheme } from 'styled-components';

import { ProductGrid8 } from '@/components/homepage/homepage-8/prodict-grid';
import { InstagramGallery } from '@/components/instagram';
import { Layout } from '@/components/common/layout';
import {
  TestimonialCarousel,
  TestimonialCard,
} from '@/components/common/testimonial';
import { CategoryCard5 } from '@/components/cards/category/card5';
import CategoryCarousel from '@/components/carousel/category';
import { Slider2 } from '@/components/sliders/slide2';

import { categories8 } from '@/data/category';
import { testimonial8 } from '@/data/testimonail';
import { instagramImages8 } from '@/data/insta';
import { heroCarouselImages8, heroText8 } from '@/data/hero';

import useBreakpoints from '@/utils/useBreakpoints';

export default function HomePage8() {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <Layout barBg={theme.token.teal6}>
      {/* TODO: add hero slider */}
      <Slider2
        tagline={heroText8.tagline}
        title={heroText8.title}
        images={heroCarouselImages8}
      />

      <CategoryCarousel
        label='Shop patterns'
        gap='medium'
        navigation='arrows'
      >
        {[...categories8, ...categories8].map((category) => (
          <CategoryCard5
            key={category.name}
            {...category}
          />
        ))}
      </CategoryCarousel>

      <ProductGrid8 />

      <TestimonialCarousel
        variant={2}
        testimonials={[...testimonial8, ...testimonial8]}
        renderTestimonial={(props) => <TestimonialCard {...props} />}
      />

      <InstagramGallery
        variant={1}
        subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.'
        images={instagramImages8}
      />
    </Layout>
  );
}
