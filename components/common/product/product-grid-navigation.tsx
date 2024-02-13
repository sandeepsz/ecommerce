import { Col, Row } from 'antd';

import FilterButton from '@/ui/button/filter';
import useBreakpoints from '@/utils/useBreakpoints';

//
// TODO: add variants and props to FilterButton
//
export const ProductGridNavigation = () => {
  const { md } = useBreakpoints();

  return (
    <Row
      gutter={md ? 56 : 32}
      justify='center'
    >
      <Col>
        <FilterButton
          active
          // active={activeFilter === 'best-sellers'}
          // onClick={() => setActiveFilter('best-sellers')}
        >
          Best Sellers
        </FilterButton>
      </Col>
      <Col>
        <FilterButton
        // active={activeFilter === 'new-arrivals'}
        // onClick={() => setActiveFilter('new-arrivals')}
        >
          New Arrivals
        </FilterButton>
      </Col>
      <Col>
        <FilterButton
        // active={activeFilter === 'sale'}
        // onClick={() => setActiveFilter('sale')}
        >
          Sale
        </FilterButton>
      </Col>
    </Row>
  );
};
