import { Feature } from "@/components/common/feature";
import BannerGrid from "@/components/grid/banner";
import IconBox from "@/components/grid/icon-box";
import ProductGrid from "@/components/grid/product";
import { InstagramGallery } from "@/components/instagram";
import { Layout } from "@/components/common/layout";
import Logos1 from "@/components/logos/logos1";
import { Newsletter } from "@/components/common/newsletter";
import Slider5 from "@/components/sliders/slide5";
import { bannerData2 } from "@/data/banner";
import { heroCarouselImages2, heroText2 } from "@/data/hero";
import { instagramImages } from "@/data/insta";
import { logos } from "@/data/logos";
import { products1 } from "@/data/product";
import { services1 } from "@/data/services";

export default function HomePage2() {
  return (
    <Layout>
      <Slider5
        images={heroCarouselImages2}
        tagline={heroText2.tagline}
        title={heroText2.title}
        subtitle={heroText2.subtitle}
      />

      <BannerGrid items={bannerData2} />

      <ProductGrid products={products1} variant={2} />

      <Logos1
        title="Brand"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqu."
        logos={logos}
      />

      <Feature
        variant={1}
        tagline="Tagline"
        title="Centra Series®"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
        video={{
          src: "https://www.youtube.com/embed/BTRPBiE_1lA?si=eKiv90FJ7LyuC5js",
          thumbnail: {
            src: "/images/feature/girl-fashion.png",
            alt: "video thumbnail",
          },
        }}
      />

      <Newsletter
        variant={2}
        title={"Join Our Newsletter"}
        subtitle="Big discounts and right to your inbox."
      />

      <InstagramGallery
        variant={1}
        tagline="Check us out"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
        images={instagramImages}
      />

      <IconBox items={services1} />
    </Layout>
  );
}
