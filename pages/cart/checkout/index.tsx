import { Col, Row } from "antd";

import Container from "@/ui/container";
import Heading from "@/ui/headings";

import { CheckoutOrderSummary } from "@/components/cart";

import { Layout } from "@/components/common/layout";

import { cartItems } from "@/data/cart";

import useBreakpoints from "@/utils/useBreakpoints";
import { CheckoutForm } from "@/components/cart/cart-checkout";
import Icon from "@/components/icons";

const Checkout = () => {
  const { md } = useBreakpoints();

  const orderSummary = (
    <CheckoutOrderSummary
      appliedCoupons={[{ code: "Nayz10", discount: 8 }]}
      orderSummary={{
        items: [cartItems[0]],
        shipping: 0,
        subtotal: 80,
        total: 72,
      }}
    />
  );

  return (
    <Layout>
      <Container pt={md ? 52 : 32} pb={md ? 52 : 16}>
        <Heading as={md ? "h3" : "h4"} style={{ textAlign: "center" }}>
          Checkout
        </Heading>
      </Container>

      <Container pt={md ? 52 : 16} pb={md ? 52 : 16}>
        <Row gutter={md ? 32 : [0, 40]}>
          <Col span={24} md={12} offset={md ? 2 : 0}>
            <CheckoutForm
              shippingMethods={[
                {
                  code: "free",
                  label: "Free Shipping",
                  price: 0,
                },
                {
                  code: "express",
                  label: "Express Shipping",
                  price: 15,
                  pricePrefix: "+",
                },
              ]}
              paymentMethods={[
                {
                  code: "card",
                  label: "Pay by card",
                  icon: <Icon size={24} type="credit-card" />,
                },
                {
                  code: "installment",
                  label: "$10 monthly installment",
                  icon: <Icon type="after-pay" />,
                },
                {
                  code: "paypal",
                  label: "PayPal",
                },
              ]}
            >
              {!md && orderSummary}
            </CheckoutForm>
          </Col>
          {md && <Col md={8}>{orderSummary}</Col>}
        </Row>
      </Container>
    </Layout>
  );
};

export default Checkout;
