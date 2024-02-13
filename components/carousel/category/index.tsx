import { type ReactNode, useRef, useState } from 'react';

import { Carousel, Col, Row, type RowProps } from 'antd';
import { type CarouselRef } from 'antd/es/carousel';

import Icon from '@/components/icons';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import NavigationDot from '@/ui/navigation-dot';
import SizedBox from '@/ui/sized-box';
import { ButtonText } from '@/ui/text';
// import { type Category } from '@/components/cards/category';

import useBreakpoints from '@/utils/useBreakpoints';
import { CarouselWrapper, NavigationArrow, type Gap } from './styles';
import Button from '@/ui/button';

interface CategoryCarouselProps {
  label: string;
  /**
   * Only for screens smaller than md breakpoint
   */
  labelAlign?: RowProps['justify'];
  gap?: Gap;
  // categories: Category[];
  // renderCategory: (props: Category) => ReactNode;
  children: ReactNode;
  navigation?: 'dots' | 'button' | 'arrows';
}

export default function CategoryCarousel({
  label,
  labelAlign = 'center',
  gap = 'small',
  // categories,
  // renderCategory,
  children,
  navigation = 'dots',
}: CategoryCarouselProps) {
  const { md, lg, xl } = useBreakpoints();
  const [noOfDots, setNoOfDots] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselRef | null>(null);
  const slideToScroll = xl ? 4 : lg ? 3 : md ? 2 : 1; // helps generate appropriate no. of dots

  const handleDotClick = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index * slideToScroll);
    }
    setCurrentSlide(index);
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <Container>
      <Row justify={md ? 'space-between' : labelAlign}>
        <Col>
          {md ? (
            <Heading as='h5'>{label}</Heading>
          ) : (
            <ButtonText size='xLarge'>{label}</ButtonText>
          )}
        </Col>
        {md && (
          <Col>
            {navigation === 'dots' && (
              <Row gutter={16}>
                {Array(noOfDots)
                  .fill('')
                  .map((_, index) => (
                    <Col key={index}>
                      <NavigationDot
                        active={currentSlide === index}
                        onClick={() => handleDotClick(index)}
                      />
                    </Col>
                  ))}
              </Row>
            )}
            {navigation === 'button' && (
              <Button
                size='medium'
                type='underline'
              >
                See all categories
              </Button>
            )}
            {navigation === 'arrows' && (
              <Row gutter={12}>
                <Col>
                  <NavigationArrow onClick={handlePrevClick}>
                    <Icon
                      type='arrow-left'
                      size={32}
                    />
                  </NavigationArrow>
                </Col>
                <Col>
                  <NavigationArrow onClick={handleNextClick}>
                    <Icon
                      type='arrow'
                      size={32}
                    />
                  </NavigationArrow>
                </Col>
              </Row>
            )}
          </Col>
        )}
      </Row>
      <SizedBox height={{ base: 16, md: 32 }} />
      <CarouselWrapper gap={gap}>
        <Carousel
          ref={(ref) => (carouselRef.current = ref)}
          slidesToScroll={slideToScroll}
          dots={true}
          appendDots={(dots) => {
            // @ts-ignore
            setNoOfDots(dots?.length ?? 0);
            return <></>;
          }}
          variableWidth
        >
          {/* {categories.map((category) => (
            <Fragment key={category.name}>{renderCategory(category)}</Fragment>
          ))} */}
          {children}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}
