import { Col, Row } from 'antd';
import { useTheme } from 'styled-components';

import Text from '@/ui/text';
import Heading from '@/ui/headings';
import Container from '@/ui/container';

import useBreakpoints from '@/utils/useBreakpoints';
import SizedBox from '@/ui/sized-box';

import { BlogGrid } from '../blog-grid';
import { BlogCard, type BlogCardPropsT } from '../blog-card';

//
// TODO: add other props if required
//
type BlogSectionProps = {
  tagline?: string;
  title: string;
  blogs: [BlogCardPropsT, BlogCardPropsT, BlogCardPropsT];
};

export const BlogSection = ({ tagline, title, blogs }: BlogSectionProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Container>
      <Row gutter={md ? [0, 8] : [0, 4]}>
        {tagline && (
          <Col span={24}>
            <Text
              size={md ? '16' : '12'}
              semibold
              color={theme.token.black9}
            >
              {tagline}
            </Text>
          </Col>
        )}
        <Col span={24}>
          <Heading
            as={md ? 'h4' : 'h7'}
            style={{
              ...(md && {
                maxWidth: 652,
              }),
            }}
          >
            {title}
          </Heading>
        </Col>
      </Row>
      <SizedBox height={md ? 32 : 24} />
      <BlogGrid
        blogs={blogs}
        renderBlog={(props) => <BlogCard {...props} />}
      />
    </Container>
  );
};
