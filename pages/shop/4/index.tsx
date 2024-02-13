import { Layout } from '@/components/common/layout';
import { PageHeader } from '@/components/common/pageheader';
import { ShopPageProducts } from '@/components/shoppage/products';

import { shopHeader } from '@/data/shop';
import { productGrid4, productCarousel4 } from '@/data/product';

export default function ShopPage4() {
  return (
    <Layout>
      <PageHeader
        variant='full'
        {...shopHeader}
      />
      <ShopPageProducts
        defaultCols={2}
        products={[...productGrid4, ...productCarousel4]}
      />
    </Layout>
  );
}
