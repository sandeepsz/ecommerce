import Button from '@/ui/button';
import Container from '@/ui/container';
import SizedBox from '@/ui/sized-box';
import {
  ProductGrid,
  ProductGridNavigation,
  ProductGridSkeleton,
  ProductCardSkeleton,
  ProductCard,
} from '@/components/common/product';

import { productGrid5 } from '@/data/product';

import { useDelay } from '@/hooks/use-delay';
import useBreakpoints from '@/utils/useBreakpoints';

export const ProductGrid5 = () => {
  const isLoading = useDelay(2000);
  const { md } = useBreakpoints();
  const products = productGrid5;

  const loading = (
    <ProductGridSkeleton
      renderSkeleton={(props) => (
        <ProductCardSkeleton
          {...props}
          rating
        />
      )}
    />
  );

  const productGrid = (
    <ProductGrid
      products={products}
      // strip label because no badge is to be shown
      renderProduct={({ label, ...rest }) => <ProductCard {...rest} />}
    />
  );

  return (
    <Container>
      <ProductGridNavigation />
      <SizedBox height={md ? 52 : 24} />

      {isLoading ? loading : productGrid}

      <Button
        centered
        size={md ? 'medium' : 'xSmall'}
        roundness='sharp'
        style={{ marginTop: md ? '56px' : '40px' }}
      >
        Load More
      </Button>
    </Container>
  );
};
