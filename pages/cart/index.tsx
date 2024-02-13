import { Col, Row } from 'antd';

import Box from '@/ui/box';
import Container from '@/ui/container';
import Heading from '@/ui/headings';

import { CartGoal } from '@/components/cart';
import { CartCoupon } from '@/components/cart/cart-coupon';
import { CartItems } from '@/components/cart/cart-items';
import { CartSummary } from '@/components/cart/cart-summary';
import { Layout } from '@/components/common/layout';

import { cartItems } from '@/data/cart';

import useBreakpoints from '@/utils/useBreakpoints';

const Cart = () => {
  const { md } = useBreakpoints();

  return (
    <Layout>
      <Container
        pt={md ? 52 : 32}
        pb={md ? 52 : 32}
      >
        <Heading
          as={md ? 'h3' : 'h4'}
          style={{ textAlign: 'center' }}
        >
          Cart
        </Heading>
      </Container>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <CartGoal
          text='Shop for $34 more to enjoy FREE Shipping'
          progress={76}
        />
      </Box>
      <Container
        pt={md ? 52 : 16}
        pb={md ? 52 : 16}
      >
        <Row gutter={md ? 32 : [0, 40]}>
          <Col
            span={24}
            md={20}
            offset={md ? 2 : 0}
          >
            <CartItems items={cartItems} />
          </Col>
        </Row>
      </Container>
      <Container
        pt={md ? 52 : 16}
        pb={md ? 52 : 16}
      >
        <Row gutter={md ? 32 : [0, 40]}>
          <Col
            span={24}
            md={8}
            offset={md ? 2 : 0}
          >
            <CartCoupon />
          </Col>
          <Col
            span={24}
            md={10}
            offset={md ? 2 : 0}
          >
            <CartSummary
              title='Cart summary'
              shippingOptions={[
                {
                  label: 'Free shipping',
                  code: 'free',
                  price: 0,
                },
                {
                  label: 'Express shipping',
                  code: 'express',
                  price: 15,
                  pricePrefix: '+',
                },
              ]}
              subtotal={160}
              total={160}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
