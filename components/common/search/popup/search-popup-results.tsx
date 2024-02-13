import Text from "@/ui/text";
import Box from "@/ui/box";
import SizedBox from "@/ui/sized-box";
import Button from "@/ui/button";

import {
  ProductCard,
  ProductCardSkeleton,
  ProductGrid,
  ProductGridSkeleton,
} from "@/components/common/product";

import { useDelay } from "@/hooks/use-delay";
import { productGrid4 } from "@/data/product";

import useBreakpoints from "@/utils/useBreakpoints";

export const SearchPopupResults = ({ searchTerm }: { searchTerm: string }) => {
  const isLoading = useDelay(1000);
  const { md } = useBreakpoints();

  const products = productGrid4;

  if (!searchTerm) {
    return null;
  }

  const loading = (
    <ProductGridSkeleton
      cols={4}
      renderSkeleton={(props) => (
        <ProductCardSkeleton {...props} rating={md ? true : false} />
      )}
    />
  );

  const productGrid = (
    <ProductGrid
      cols={4}
      products={products}
      renderProduct={({ label, rating, ...rest }) => (
        <ProductCard
          ratingColor="orange"
          rating={md ? rating : undefined}
          {...rest}
        />
      )}
    />
  );

  return (
    <>
      <Text
        size={md ? "22" : "16"}
        style={{
          textAlign: "center",
          paddingTop: md ? 24 : 0,
          paddingBottom: md ? 24 : 0,
        }}
      >
        Search results for &quot;{searchTerm}&quot;
      </Text>
      <Box paddingTop={16} paddingBottom={md ? 40 : 24}>
        {isLoading ? loading : productGrid}
        <SizedBox height={md ? 56 : 24} />
        <Box display="flex" justifyContent="center">
          <Button href="/searchpage" size={md ? "medium" : "xSmall"}>
            {md ? "See all results" : "Load more"}
          </Button>
        </Box>
      </Box>
    </>
  );
};
