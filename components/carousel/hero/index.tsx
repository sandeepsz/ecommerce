import { Carousel } from "antd";
import { Wrapper } from "./styles";
// import Image from "next/image"

export default function HeroCarousel({
  images,
  baseHeight,
}: {
  images: string[];
  baseHeight?: string;
}) {
  return (
    <Wrapper height={baseHeight}>
      <Carousel autoplay>
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={index} src={image} alt={`brand${index}`} />
        ))}
      </Carousel>
    </Wrapper>
  );
}
