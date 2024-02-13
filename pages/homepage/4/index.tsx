import { useTheme } from 'styled-components';

import { Badge } from '@/ui/badge';

import { Feature } from '@/components/common/feature';
import { ProductGrid4 } from '@/components/homepage/homepage-4/product-grid';
import CategoryGrid1 from '@/components/grid/category/grid1';
import IconBox from '@/components/grid/icon-box';
import { Layout } from '@/components/common/layout';
import Slider3 from '@/components/sliders/slide3';
import { ProductCarousel, ProductCard } from '@/components/common/product';

import {
  TestimonialCarousel,
  TestimonialCard,
} from '@/components/common/testimonial';

import { services1 } from '@/data/services';
import { categories4 } from '@/data/category';
import { heroCarouselImages4, heroText4 } from '@/data/hero';
import { productCarousel4 } from '@/data/product';
import { testimonial4 } from '@/data/testimonail';

export default function HomePage4() {
  const theme = useTheme();

  return (
    <Layout>
      <Slider3
        images={heroCarouselImages4}
        title={heroText4.title}
        tagline={heroText4.tagline}
        subtitle={heroText4.subtitle}
      />

      {/* TODO:  move this to seperate component? */}
      <ProductCarousel
        label='Latest Arrivals'
        showArrows
        products={productCarousel4.concat(productCarousel4)}
        renderProduct={({ label, ...rest }) => (
          <div style={{ width: rest.width }}>
            <ProductCard
              badge1={
                <Badge
                  style={{ width: '104px' }}
                  color='dark'
                  text={label}
                />
              }
              {...rest}
            />
          </div>
        )}
      />

      <CategoryGrid1 categories={categories4} />

      <ProductGrid4 />

      <Feature
        variant={3}
        images={[
          {
            src: '/images/feature/shop-4-feature-1.png',
            alt: 'fashion',
          },
          {
            src: '/images/feature/shop-4-feature-2.png',
            alt: 'fashion',
          },
        ]}
        title='Made from the finest materials'
        tagline='TRENDING'
        subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.'
      />

      <TestimonialCarousel
        variant={1}
        testimonials={[...testimonial4, ...testimonial4]}
        title='Customers love'
        renderTestimonial={(props) => <TestimonialCard {...props} />}
      />

      <Feature
        variant={2}
        theme='dark'
        video={{
          src: 'https://www.youtube.com/embed/geFi-ZpN2ZM',
          thumbnail: {
            src: '/images/feature/action-packed.png',
            alt: 'video thumbnail',
          },
        }}
        title='Action Packed'
        subtitle='Phosfluor escently engage worldwide with web-enabled process-centric technology.'
        background={theme.token.red5}
      />

      <IconBox items={services1} />
    </Layout>
  );
}
