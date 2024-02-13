import React, { useState } from "react";
import { ProductImageSliderProps } from "./type";
import Box from "@/ui/box";
import Container from "@/ui/container";
import useBreakpoints from "@/utils/useBreakpoints";
import { SliderContainer } from "./styles";
import { LargeImage } from "./styles";
import { ThumbnailContainer } from "./styles";
import { ThumbnailImage } from "./styles";
import { Badge } from "@/ui/badge";
import { Wrapper } from "./styles";

const ProductImageCarasoul: React.FC<ProductImageSliderProps> = ({
  bigImage,
  smallImages,
}: ProductImageSliderProps) => {
  const [selectedImage, setSelectedImage] = useState(bigImage);
  const { md } = useBreakpoints();
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <Container>
      <Wrapper variant={1}>
        <SliderContainer variant={1}>
          <LargeImage variant={1} src={selectedImage} alt="Product" />
          <ThumbnailContainer variant={1}>
            {smallImages.map((image, index) => (
              <ThumbnailImage
                key={index}
                src={image}
                alt={`Product ${index}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </ThumbnailContainer>
        </SliderContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductImageCarasoul;
