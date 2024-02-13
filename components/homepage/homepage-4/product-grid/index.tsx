import { useState, useEffect } from 'react';

import Button from '@/ui/button';
import { Badge } from '@/ui/badge';
import Container from '@/ui/container';
import SizedBox from '@/ui/sized-box';
import {
  ProductGrid,
  // ProductGridNavigation,
  ProductGridSkeleton,
  ProductCardSkeleton,
  ProductCard,
} from '@/components/common/product';

import { productGrid4 } from '@/data/product';
import { useDelay } from '@/hooks/use-delay';
import useBreakpoints from '@/utils/useBreakpoints';

import { StyledProductGridNav } from './styles';

export const ProductGrid4 = () => {
  const isLoading = useDelay(5000);
  const { md } = useBreakpoints();
  const products = productGrid4;

  const loading = (
    <ProductGridSkeleton
      renderSkeleton={(props) => (
        <ProductCardSkeleton
          {...props}
          position='center'
        />
      )}
    />
  );

  const productGrid = (
    <ProductGrid
      products={products}
      renderProduct={({ label, ...rest }) => (
        <ProductCard
          position='center'
          badge1={
            <Badge
              color='light'
              size={md ? 'medium' : 'small'}
              style={{
                ...(!md && {
                  width: '87px',
                }),
              }}
              text={label}
            />
          }
          {...rest}
        />
      )}
    />
  );

  return (
    <Container>
      <StyledProductGridNav>
        You&apos;re browsing
        <Button
          color='light'
          size={md ? 'xLarge' : 'small'}
          type='underline'
          rightIcon={md ? 'chevron-down' : 'arrow'}
        >
          Dresses
        </Button>
        In
        <Button
          color='light'
          size={md ? 'xLarge' : 'small'}
          type='underline'
          rightIcon={md ? 'chevron-down' : 'arrow'}
        >
          Clothing
        </Button>
      </StyledProductGridNav>
      <SizedBox height={md ? 52 : 24} />

      {isLoading ? loading : productGrid}

      <Button
        centered
        size={md ? 'medium' : 'xSmall'}
        roundness='rounded'
        style={{ marginTop: md ? '56px' : '40px' }}
      >
        Load More
      </Button>
    </Container>
  );
};
