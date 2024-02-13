import { useState, useRef, Fragment, type ReactNode } from 'react';

import { type CarouselProps } from 'antd';
import { type CarouselRef } from 'antd/es/carousel';
import { useTheme } from 'styled-components';

import Text from '@/ui/text';
import Container from '@/ui/container';
import Box from '@/ui/box';
import SizedBox from '@/ui/sized-box';
import Heading from '@/ui/headings';

import useBreakpoint from '@/utils/useBreakpoints';

import { type TestimonialCardPropsT } from '../testimonial-card';

import { NavigationArrows } from './navigation-arrows';
import { StyledCarousel } from './styles';

type TestimonialCarouselProps = {
  testimonials: TestimonialCardPropsT[];
  renderTestimonial: (props: TestimonialCardPropsT) => ReactNode;
  title?: string;
  subtitle?: string;
} & (
  | {
      variant: 1;
      title: string;
      renderNavigation?: boolean;
    }
  | {
      variant: 2;
    }
);

//
// TODO: fix slider dots
//

export const TestimonialCarousel = (props: TestimonialCarouselProps) => {
  const { md } = useBreakpoint();
  const theme = useTheme();
  const carouselRef = useRef<CarouselRef | null>(null);
  const [noOfDots, setNoOfDots] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { variant, testimonials, renderTestimonial } = props;

  const cols = variant === 2 ? 1 : 3;

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
    dots: variant === 1,
    variableWidth: true,
    infinite: false,
    // scroll only one item at a time on mobile
    slidesToScroll: md ? cols : 1,
    // appendDots: (dots) => {
    //   // @ts-ignore
    //   setNoOfDots(dots?.length ?? 0);
    //   return <></>;
    // },
  };

  const renderCarousel = (
    <StyledCarousel
      ref={carouselRef}
      {...settings}
    >
      {testimonials.map(({ testimonial, ...rest }) => (
        <Fragment key={testimonial.slice(0, 10)}>
          {renderTestimonial({
            testimonial,
            width: md ? 424 : 343,
            ...rest,
          })}
        </Fragment>
      ))}
    </StyledCarousel>
  );

  if (variant === 1) {
    return (
      <Container>
        {(props.title || props.subtitle) && (
          <>
            <Box textAlign='center'>
              {props.title && (
                <>
                  <Heading
                    as={md ? 'h3' : 'h5'}
                    medium
                    style={{ margin: '0 auto', maxWidth: md ? 880 : 'auto' }}
                  >
                    {props.title}
                  </Heading>
                  <SizedBox height={{ base: 8, md: 16 }} />
                </>
              )}
              {props.subtitle && (
                <Text
                  size={md ? '18' : '14'}
                  style={{ maxWidth: 540, margin: '0 auto' }}
                >
                  {props.subtitle}
                </Text>
              )}
            </Box>
            <SizedBox height={md ? 32 : 16} />
          </>
        )}

        {props.renderNavigation && (
          <>
            <Box
              display='flex'
              alignItems='center'
              {...(md
                ? {
                    justifyContent: 'space-between',
                  }
                : {
                    flexDirection: 'column',
                    gap: 16,
                  })}
            >
              <Heading as='h4'>{props.title}</Heading>
              <NavigationArrows
                onPrev={handlePrevClick}
                onNext={handleNextClick}
              />
            </Box>
            <SizedBox height={md ? 32 : 16} />
          </>
        )}

        {renderCarousel}
      </Container>
    );
  }

  //
  // TODO: fix styles for variant 2
  //
  return (
    <Container>
      <StyledCarousel
        ref={carouselRef}
        clearMargin
        {...settings}
      >
        {testimonials.map(({ testimonial, ...rest }) => (
          <Fragment key={testimonial.slice(0, 10)}>
            {renderTestimonial({
              testimonial,
              // idk if it's a good idea to hardcode the variant here
              variant: 3,
              ...((variant as unknown as number) === 1 && {
                width: md ? 424 : 343,
              }),
              ...rest,
            })}
          </Fragment>
        ))}
      </StyledCarousel>
      <NavigationArrows
        onPrev={handlePrevClick}
        onNext={handleNextClick}
        style={{ justifyContent: 'center' }}
      />
    </Container>
  );
};
