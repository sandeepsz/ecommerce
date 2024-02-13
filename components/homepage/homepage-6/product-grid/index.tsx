import Box from '@/ui/box';
import Heading from '@/ui/headings';
import Text from '@/ui/text';
import Container from '@/ui/container';
import SizedBox from '@/ui/sized-box';
import {
  ProductGrid,
  ProductGridSkeleton,
  ProductCardSkeleton,
  ProductCard,
} from '@/components/common/product';

import { productGrid6 } from '@/data/product';

import { useDelay } from '@/hooks/use-delay';
import useBreakpoints from '@/utils/useBreakpoints';

export const ProductGrid6 = () => {
  const isLoading = useDelay(6000);
  const { md } = useBreakpoints();
  const products = [...productGrid6, ...productGrid6.slice(0, md ? 3 : 2)];

  const loading = (
    <ProductGridSkeleton
      cols={3}
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
      cols={3}
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
        <Text
          size={md ? '16' : '12'}
          semibold
        >
          FEATURED
        </Text>
        <SizedBox height={4} />
        <Heading
          as={md ? 'h3' : 'h5'}
          medium
          style={{ margin: '0 auto', maxWidth: md ? 880 : 'auto' }}
        >
          Create your dream shop in a glance with Nayzak theme.
        </Heading>
        <SizedBox height={{ base: 8, md: 16 }} />
        <Text
          size={md ? '18' : '14'}
          style={{ maxWidth: 540, margin: '0 auto' }}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum.
        </Text>
      </Box>
      <SizedBox height={md ? 52 : 24} />

      {isLoading ? loading : productGrid}
    </Container>
  );
};
