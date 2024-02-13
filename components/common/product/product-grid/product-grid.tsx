import { type ReactNode } from 'react';

import { Col, Row } from 'antd';

import { type ProductCardProps } from '@/types';
import useBreakpoints from '@/utils/useBreakpoints';

export type ColNumber = 2 | 3 | 4;

type RenderProductProps = ProductCardProps & {
  height: number;
  width: number;
};

type ProductGridProps = {
  products: ProductCardProps[];
  cols?: ColNumber;
  renderProduct: (product: RenderProductProps) => ReactNode;
};

export const generateColsConfig = (cols: ColNumber) => {
  switch (cols) {
    case 2:
      return { span: 12, height: 889, width: 652 };
    case 3:
      return { span: 8, height: 565, width: 424 };
    default:
    case 4:
      return { span: 6, height: 413, width: 310 };
    // case 5:
    //   return { span: 4, height: 322 };
  }
};

export const ProductGrid = ({
  products,
  cols = 4,
  renderProduct,
}: ProductGridProps) => {
  const { span, height, width } = generateColsConfig(cols);
  const { md } = useBreakpoints();

  return (
    <Row gutter={md ? [32, 56] : [17, 32]}>
      {products.map(({ name, ...rest }) => (
        <Col
          key={name}
          span={12}
          md={span}
        >
          {renderProduct({
            name,
            width: md ? width : 163,
            height: md ? height : 217,
            ...rest,
          })}
        </Col>
      ))}
    </Row>
  );
};
