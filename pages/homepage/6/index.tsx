import { useTheme } from 'styled-components';

import { Slider4 } from '@/components/sliders/slider4';
import { CategoryCard1 } from '@/components/cards/category/card1';
import CategoryCarousel from '@/components/carousel/category';
import { BlogSection } from '@/components/common/blog';
import { Layout } from '@/components/common/layout';
import { Feature } from '@/components/common/feature';
import { ProductGrid6 } from '@/components/homepage/homepage-6/product-grid';

import { blogSection6 } from '@/data/blog';
import { categories6 } from '@/data/category';
import { heroCarouselImages6, heroText6 } from '@/data/hero';

export default function HomePage5() {
  const theme = useTheme();

  return (
    <Layout
      headerItemsPosition='left'
      barBg={theme.token.teal6}
    >
      <Slider4
        images={heroCarouselImages6}
        {...heroText6}
      />

      <CategoryCarousel
        label='New Arrivals'
        labelAlign='start'
      >
        {[...categories6, ...categories6, ...categories6].map((category) => (
          <CategoryCard1
            key={category.name}
            {...category}
          />
        ))}
      </CategoryCarousel>

      <Feature
        variant={5}
        images={[
          {
            src: '/images/feature/plant-john.png',
            alt: 'plant',
          },
          {
            src: '/images/feature/plant-psalms.png',
            alt: 'plant',
          },
        ]}
        buttonText='See Collection'
        title='Plant books'
        tagline='NEW'
        subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
      />

      <ProductGrid6 />

      <BlogSection
        title='Plant blog'
        blogs={blogSection6}
      />
    </Layout>
  );
}
