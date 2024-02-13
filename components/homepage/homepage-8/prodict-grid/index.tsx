import Heading from '@/ui/headings';
import Container from '@/ui/container';
import SizedBox from '@/ui/sized-box';
import Box from '@/ui/box';
import Button from '@/ui/button';

import {
  ProductGrid,
  ProductGridSkeleton,
  ProductCardSkeleton,
  ProductCard,
} from '@/components/common/product';

import { productGrid8 } from '@/data/product';

import { useDelay } from '@/hooks/use-delay';
import useBreakpoints from '@/utils/useBreakpoints';

export const ProductGrid8 = () => {
  const isLoading = useDelay(4000);
  const { md } = useBreakpoints();
  const products = productGrid8;

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
      // strip label because no badge is to be shown
      renderProduct={({ label, ...rest }) => (
        <ProductCard
          position='center'
          {...rest}
        />
      )}
    />
  );

  return (
    <Container>
      <Box textAlign='center'>
        <Heading
          as={md ? 'h3' : 'h5'}
          medium
          style={{ margin: '0 auto', maxWidth: md ? 880 : 'auto' }}
        >
          Test your limits, explore a wide variety of product.
        </Heading>
      </Box>
      <SizedBox height={md ? 52 : 24} />

      {isLoading ? loading : productGrid}

      <Button
        centered
        size={md ? 'medium' : 'xSmall'}
        style={{ marginTop: md ? '56px' : '40px' }}
      >
        See all Kimonos
      </Button>
    </Container>
  );
};
