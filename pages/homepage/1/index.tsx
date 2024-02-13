import Banner5 from "@/components/banners/banner5";
import { Feature } from "@/components/common/feature";
import CategoryCarousel from "@/components/carousel/category";
import IconBox from "@/components/grid/icon-box";
import ProductGrid from "@/components/grid/product";
import { Layout } from "@/components/common/layout";
import { Newsletter } from "@/components/common/newsletter";
import Slider1 from "@/components/sliders/slide1";
import CategoryCard from "@/components/cards/category";

import { categories1 } from "@/data/category";
import { heroCarouselImages1, heroText1 } from "@/data/hero";
import { products1 } from "@/data/product";
import { services1 } from "@/data/services";

export default function HomePage1() {
  return (
    <Layout>
      <Slider1
        images={heroCarouselImages1}
        title={heroText1.title}
        subtitle={heroText1.subtitle}
      />

      <CategoryCarousel label="New Arrivals">
        {categories1.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </CategoryCarousel>

      <Banner5
        title="RUN SMART+"
        subtitle="Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology."
        image="/images/banner/watch.png"
      />

      <ProductGrid products={products1} />

      <Feature
        variant={1}
        title="Nayzak Series®"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
        video={{
          src: "https://youtu.be/BTRPBiE_1lA?si=uO5ANLKuHCS4p5CB",
          thumbnail: {
            src: "/images/feature/shoe.png",
            alt: "video thumbnail",
          },
        }}
      />

      <Newsletter
        variant={1}
        title={
          <>
            Join our newsletter.
            <br /> Enjoy big discounts.
          </>
        }
        image="/images/newsletter/shoe.png"
      />

      <IconBox items={services1} />
    </Layout>
  );
}
