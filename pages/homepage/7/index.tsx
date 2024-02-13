import { useTheme } from 'styled-components';

import { Badge } from '@/ui/badge';
import Button from '@/ui/button';
import Box from '@/ui/box';

import { Hero } from '@/components/homepage/homepage-7/hero';
import { CategoryCard5 } from '@/components/cards/category/card5';
import CategoryCarousel from '@/components/carousel/category';
import { InstagramGallery } from '@/components/instagram';
import { Layout } from '@/components/common/layout';
import { Feature } from '@/components/common/feature';
import { ProductCard, ProductCarousel } from '@/components/common/product';
import { Banner2 } from '@/components/banners/banner2';
import Logos1 from '@/components/logos/logos1';
import { Newsletter } from '@/components/common/newsletter';

import { heroData7 } from '@/data/hero';
import { logos } from '@/data/logos';
import { categories7 } from '@/data/category';
import { instagramImages7 } from '@/data/insta';
import { productCarousel7 } from '@/data/product';
import { bannerData7 } from '@/data/banner';
import useBreakpoints from '@/utils/useBreakpoints';

export default function HomePage7() {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <Layout
      headerItemsPosition='left'
      barBg={theme.token.teal6}
    >
      <Hero {...heroData7} />

      <CategoryCarousel
        label='Categories'
        gap='medium'
        navigation='button'
      >
        {[...categories7, ...categories7].map((category) => (
          <CategoryCard5
            key={category.name}
            {...category}
          />
        ))}
      </CategoryCarousel>

      <Banner2 banners={bannerData7} />

      <ProductCarousel
        label='Latest Additions'
        products={productCarousel7.concat(productCarousel7)}
        renderProduct={({ label, ...rest }) => (
          <div style={{ width: rest.width }}>
            <ProductCard
              badge1={<Badge text={label} />}
              {...rest}
            />
          </div>
        )}
      />

      <Logos1
        title='Shop brands'
        subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqu.'
        logos={logos}
      />

      <Feature
        variant={3}
        images={[
          {
            src: '/images/feature/face-cream.png',
            alt: 'face cream',
          },
          {
            src: '/images/feature/lip-stick.png',
            alt: 'lip stick',
          },
        ]}
        CTA={
          md && (
            <Button
              color='light'
              roundness='pill'
              size='medium'
            >
              See Collection
            </Button>
          )
        }
        title='Caring about you and your body.'
        tagline='TRENDING'
        subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.'
      />

      <Box background={theme.token.black50}>
        <Newsletter
          variant={2}
          title='Join our newsletter.'
          subtitle='Big discounts and right to your inbox.'
          inputProps={{
            variant: 'contained',
          }}
        />
      </Box>

      <InstagramGallery
        variant={3}
        tagline='#nayzakdesign'
        title='On Instagram'
        images={instagramImages7}
      />
    </Layout>
  );
}
