import { useTheme } from 'styled-components';

import Slider3 from '@/components/sliders/slide3';
import { Layout } from '@/components/common/layout';
import { Feature } from '@/components/common/feature';
import { Newsletter } from '@/components/common/newsletter';
import { Banner } from '@/components/common/banner';
import { BannerImage } from '@/components/common/banner/banner-image';
import Logos2 from '@/components/logos/logos2';

import { bannerData9 } from '@/data/banner';
import { heroCarouselImages9, heroText9 } from '@/data/hero';

export default function HomePage5() {
  const theme = useTheme();

  return (
    <Layout>
      {/* TODO: add hero slider & arrows */}
      <Slider3
        color='black'
        background='white'
        buttonProps={{
          color: 'light',
          type: 'underline',
        }}
        images={heroCarouselImages9}
        title={heroText9.title}
        tagline={heroText9.tagline}
        subtitle={heroText9.subtitle}
      />

      {/* TODO: add logo carousel */}
      <Logos2 />

      <Banner
        variant={3}
        banners={bannerData9}
      />

      <Feature
        variant={4}
        image={{
          src: '/images/feature/brown-bag.png',
          alt: 'brown bag',
        }}
        tagline='EXCLUSIVE'
        title='50% OFF'
        subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
        countdown='473982000'
      />

      <Newsletter
        variant={2}
        border={`1px solid ${theme.token.black4}`}
        title={'Join Our Newsletter'}
        subtitle='Big discounts and right to your inbox.'
      />

      <BannerImage
        variant={2}
        img={{
          src: '/images/banner/bag-banner.png',
          alt: 'banner image',
        }}
        title='Exquisite Craftsmanship'
        subtitle='Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.'
      />
    </Layout>
  );
}
