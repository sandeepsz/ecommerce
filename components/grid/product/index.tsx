import ProductCard1 from '@/components/cards/product/card1';
import ProductCard2 from '@/components/cards/product/card2';
import type { Filter, ProductCardProps } from '@/components/cards/product/type';
import Button from '@/ui/button';
import FilterButton from '@/ui/button/filter';
import Container from '@/ui/container';
import SizedBox from '@/ui/sized-box';
import useBreakpoints from '@/utils/useBreakpoints';
import { Col, Row } from 'antd';
import { useState } from 'react';

interface ProductGrid {
  products: ProductCardProps[];
  variant?: 1 | 2;
}

export default function ProductGrid({
  products,
  variant: style = 1,
}: ProductGrid) {
  const { md } = useBreakpoints();
  const [activeFilter, setActiveFilter] = useState<Filter>('best-sellers');

  return (
    <Container>
      <Row
        gutter={md ? 56 : 32}
        justify='center'
      >
        <Col>
          <FilterButton
            active={activeFilter === 'best-sellers'}
            onClick={() => setActiveFilter('best-sellers')}
          >
            Best Sellers
          </FilterButton>
        </Col>
        <Col>
          <FilterButton
            active={activeFilter === 'new-arrivals'}
            onClick={() => setActiveFilter('new-arrivals')}
          >
            New Arrivals
          </FilterButton>
        </Col>
        <Col>
          <FilterButton
            active={activeFilter === 'sale'}
            onClick={() => setActiveFilter('sale')}
          >
            Sale
          </FilterButton>
        </Col>
      </Row>
      <SizedBox height={{ base: 24, md: 52 }} />
      <Row
        gutter={md ? [32, 56] : [17, 32]}
        justify='center'
      >
        {products
          .filter((p) => p.filter?.includes(activeFilter))
          .map((product, index) => (
            <Col
              key={index}
              span={12}
              lg={style === 1 ? 8 : 12}
              xl={style === 1 ? 6 : 8}
            >
              {style === 1 ? (
                <ProductCard1 {...product} />
              ) : (
                <ProductCard2 {...product} />
              )}
            </Col>
          ))}
      </Row>
      <SizedBox height={{ base: 40, md: 56 }} />
      <Button
        centered
        size={md ? 'medium' : 'xSmall'}
        roundness={md ? (style === 1 ? 'pill' : 'sharp') : 'rounded'}
      >
        Load More
      </Button>
    </Container>
  );
}
