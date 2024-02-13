import { Col, Row } from 'antd';
import Container from '@/ui/container';
import { CategoryCard3 } from '@/components/cards/category/card3';
import { type Category } from '@/components/cards/category';
import useBreakpoints from '@/utils/useBreakpoints';

export default function CategoryGrid1({
  categories,
}: {
  categories: Category[];
}) {
  const { md } = useBreakpoints();

  return (
    <Container>
      <Row gutter={md ? [32, 32] : [0, 16]}>
        {categories.map((category) => (
          <Col
            key={category.name}
            span={24}
            md={12}
            style={{
              position: 'relative',
              height: md ? '384px' : '202px',
            }}
          >
            <CategoryCard3 {...category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
