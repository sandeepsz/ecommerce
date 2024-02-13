import { useState, useRef, Fragment, type ReactNode } from 'react';

import { Row, type CarouselProps, Col } from 'antd';
import { type CarouselRef } from 'antd/es/carousel';

import Heading from '@/ui/headings';
import { ButtonText } from '@/ui/text';
import NavigationDot from '@/ui/navigation-dot';
import SizedBox from '@/ui/sized-box';
import Icon from '@/components/icons';
import Container from '@/components/ui/container';

import { type ProductCardProps } from '@/types';

import useBreakpoint from '@/utils/useBreakpoints';

import { StyledCarousel, StyledNavigationArrow } from './styles';

type ColNumber = 4 | 5;

type RenderProductProps = ProductCardProps & {
  height: number;
  width: number;
};

type ProductCarouselProps = {
  label: string;
  cols?: ColNumber;
  showArrows?: boolean;
  products: ProductCardProps[];
  renderProduct: (product: RenderProductProps) => ReactNode;
};

export const generateColsConfig = (cols: ColNumber) => {
  switch (cols) {
    default:
    case 4:
      return { height: 413, width: 310 };
    case 5:
      return { height: 322, width: 242 };
  }
};

export const ProductCarousel = ({
  label,
  cols = 4,
  showArrows = false,
  products,
  renderProduct,
}: ProductCarouselProps) => {
  const { md } = useBreakpoint();
  const carouselRef = useRef<CarouselRef | null>(null);
  const [noOfDots, setNoOfDots] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { height, width } = generateColsConfig(cols);

  const handleDotClick = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index * cols);
    }
    setCurrentSlide(index);
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
    if (currentSlide < noOfDots - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
    if (currentSlide >= 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const settings: CarouselProps = {
    variableWidth: true,
    infinite: false,
    // scroll only one item at a time on mobile
    slidesToScroll: md ? cols : 1,
    appendDots: (dots) => {
      // @ts-ignore
      setNoOfDots(dots?.length ?? 0);
      return <></>;
    },
  };

  return (
    <Container>
      <Row style={{ justifyContent: md ? 'space-between' : 'flex-start' }}>
        <Col>
          {md ? (
            <Heading as='h5'>{label}</Heading>
          ) : (
            <ButtonText size='xLarge'>{label}</ButtonText>
          )}
        </Col>
        {md && (
          <Col>
            <Row gutter={16}>
              {showArrows && (
                <Col>
                  <StyledNavigationArrow onClick={handlePrevClick}>
                    <Icon
                      type='arrow-left'
                      size={24}
                    />
                  </StyledNavigationArrow>
                </Col>
              )}
              {Array.from({ length: noOfDots }).map((_, index) => (
                <Col key={index}>
                  <NavigationDot
                    active={currentSlide === index}
                    onClick={() => handleDotClick(index)}
                  />
                </Col>
              ))}
              {showArrows && (
                <Col>
                  <StyledNavigationArrow onClick={handleNextClick}>
                    <Icon
                      type='arrow'
                      size={24}
                    />
                  </StyledNavigationArrow>
                </Col>
              )}
            </Row>
          </Col>
        )}
      </Row>
      <SizedBox height={{ base: 16, md: 32 }} />
      <StyledCarousel
        ref={carouselRef}
        {...settings}
      >
        {products.map(({ name, ...rest }) => (
          <Fragment key={name}>
            {renderProduct({ name, height, width, ...rest })}
          </Fragment>
        ))}
      </StyledCarousel>
    </Container>
  );
};
