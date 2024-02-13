import { useTheme } from 'styled-components';

import Container from '@/ui/container';
import SizedBox from '@/ui/sized-box';

import {
  ProductGrid,
  ProductGridNavigation,
  ProductCard,
} from '@/components/common/product';

import IconBox from '@/components/grid/icon-box';
import { Layout } from '@/components/common/layout';
import { Newsletter } from '@/components/common/newsletter';
import { Banner2 } from '@/components/banners/banner2';
import { Slider7 } from '@/components/sliders/slider7';

import { services1 } from '@/data/services';
import { bannerData5 } from '@/data/banner';
import { heroCarouselImages5, heroText5 } from '@/data/hero';

import { ProductGrid5 } from '@/components/homepage/homepage-5/product-grid';

export default function HomePage5() {
  const theme = useTheme();

  return (
    <Layout barBg={theme.token.indigo4}>
      <Slider7
        images={heroCarouselImages5}
        title={heroText5.title}
        subtitle={heroText5.subtitle}
      />

      <ProductGrid5 />

      <Banner2 banners={bannerData5} />

      <Newsletter
        variant={2}
        fill='outline'
        title={'Join Our Newsletter'}
        subtitle='Big discounts and right to your inbox.'
      />

      <IconBox items={services1} />
    </Layout>
  );
}
