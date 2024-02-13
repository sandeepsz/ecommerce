import { Layout } from '@/components/common/layout';
import { productPageImages1 } from '@/data/product-page';
import ProductImageCarasoul from '@/components/productpage/product-images-carasoul';


export default function ProductPage1() {
  return (
    <Layout >
      <ProductImageCarasoul
       variant={1}
       bigImage={productPageImages1[0]}
       smallImages={productPageImages1}
       
      />
    </Layout>
  );
}
