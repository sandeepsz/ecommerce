import { Col, Row } from 'antd';

import useBreakpoints from '@/utils/useBreakpoints';

import type { BlogCardProps } from '@/types';

import type { BlogCardPropsT } from '../blog-card';

type ColNumber = 2 | 3 | 4;

type BlogGridProps = {
  blogs: BlogCardProps[];
  cols?: ColNumber;
  renderBlog: (blog: BlogCardPropsT) => React.ReactNode;
};

export const generateColsConfig = (cols: ColNumber) => {
  switch (cols) {
    case 2:
      return { span: 12, height: 486 };
    default:
    case 3:
      return { span: 8, height: 316 };
    case 4:
      return { span: 6, height: 231 };
  }
};

//
// TODO: fix image width for blog card variant 2
//
export const BlogGrid = ({ blogs, cols = 3, renderBlog }: BlogGridProps) => {
  const { span, height } = generateColsConfig(cols);
  const { md } = useBreakpoints();

  return (
    <Row gutter={md ? [32, 64] : [0, 32]}>
      {blogs.map(({ title, ...rest }) => (
        <Col
          key={title}
          span={24}
          md={span}
        >
          {renderBlog({
            title,
            height: md ? height : 316,
            ...rest,
          })}
        </Col>
      ))}
    </Row>
  );
};
