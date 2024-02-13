import { useState } from 'react';

import { Layout } from '@/components/common/layout';
import { CartFlyout } from '@/components/cart';

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Layout
      onCartClick={() => {
        setIsCartOpen(true);
      }}
    >
      <CartFlyout
        isOpen={isCartOpen}
        onClose={() => {
          setIsCartOpen(false);
        }}
      />
    </Layout>
  );
};

export default Cart;
