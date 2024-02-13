import { type ReactNode } from 'react';

import { Col, Row } from 'antd';

import useBreakpoints from '@/utils/useBreakpoints';

import { type ProductCardSkeletonProps } from '../product-card';
import { generateColsConfig, type ColNumber } from './product-grid';

type ProductGridSkeletonProps = {
  position?: 'left' | 'center';
  cols?: ColNumber;
  rows?: number;
  renderSkeleton: (
    props: Omit<ProductCardSkeletonProps, 'rating'>
  ) => ReactNode;
};

export const ProductGridSkeleton = ({
  cols = 4,
  position = 'left',
  rows = 2,
  renderSkeleton,
}: ProductGridSkeletonProps) => {
  const { span, height, width } = generateColsConfig(cols);
  const { md } = useBreakpoints();

  return (
    <Row gutter={md ? [32, 56] : [17, 32]}>
      {Array.from({ length: cols * rows }).map((_, index) => (
        <Col
          key={index}
          span={12}
          md={span}
        >
          {renderSkeleton({
            position: position,
            width: md ? width : 163,
            height: md ? height : 217,
          })}
        </Col>
      ))}
    </Row>
  );
};
