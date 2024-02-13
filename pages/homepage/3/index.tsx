import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import { Badge } from '@/ui/badge';

import Banner5 from '@/components/banners/banner5';
import BannerGrid from '@/components/grid/banner';
import { Layout } from '@/components/common/layout';
import Logos2 from '@/components/logos/logos2';
import { Newsletter } from '@/components/common/newsletter';
import Slider1 from '@/components/sliders/slide1';
import { ProductCard, ProductCarousel } from '@/components/common/product';
import { BlogSection } from '@/components/common/blog';

import { bannerData3 } from '@/data/banner';
import { blogSection3 } from '@/data/blog';
import { productCarousel3 } from '@/data/product';
import { heroCarouselImages3, heroText3 } from '@/data/hero';

export default function HomePage3() {
  const theme = useTheme();

  return (
    <Layout
      variant={2}
      barBg='white'
      barMode='dark'
    >
      <Slider1
        images={heroCarouselImages3}
        title={heroText3.title}
        subtitle={heroText3.subtitle}
      />

      <BannerGrid items={bannerData3} />

      <Logos2 />

      {/* TODO: update active dots color move this to seperate component? */}
      <ProductCarousel
        label='New Arrivals'
        products={productCarousel3.concat(productCarousel3)}
        renderProduct={({ label, ...rest }) => (
          <div style={{ width: rest.width }}>
            <ProductCard
              badge1={
                <Badge
                  roundness='rounded'
                  text={label}
                />
              }
              {...rest}
            />
          </div>
        )}
      />

      <Banner5
        title='Maydro Series®'
        subtitle='Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.'
        image='/images/banner/sofa.png'
      />

      <BlogSection
        title='Articles'
        blogs={blogSection3}
      />

      <Box background={theme.token.black50}>
        <Newsletter
          variant={2}
          title='Join our newsletter.'
          subtitle='Big discounts and right to your inbox.'
        />
      </Box>
    </Layout>
  );
}
