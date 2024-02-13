import { Col, Row, Skeleton, Space } from 'antd';

import Box from '@/ui/box';
import AspectRatio from '@/ui/aspect-ratio';
import SizedBox from '@/ui/sized-box';

import useBreakpoints from '@/utils/useBreakpoints';

export type ProductListCardSkeletonProps = {
  description?: boolean;
  rating?: boolean;
};

export const ProductListCardSkeleton = ({
  description = true,
  rating = true,
}: ProductListCardSkeletonProps) => {
  const { md } = useBreakpoints();

  return (
    <Row gutter={md ? 0 : [0, 12]}>
      <Col
        span={24}
        md={4}
      >
        <AspectRatio ratio={228 / 304}>
          <Skeleton.Image
            active
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
            }}
          />
        </AspectRatio>
      </Col>
      <Col
        span={24}
        md={20}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Box
          marginLeft={md ? 40 : 0}
          width='100%'
        >
          <Box
            position='relative'
            display='flex'
            flexDirection='column'
          >
            <Skeleton.Button
              active
              style={{ height: md ? 28 : 24, width: md ? 200 : '100%' }}
            />
          </Box>
          <SizedBox height={4} />
          <Skeleton.Button
            active
            style={{ height: md ? 22 : 20, width: md ? 120 : 100 }}
          />
          {md && (
            <>
              <SizedBox height={16} />
              {rating && (
                <Skeleton.Button
                  active
                  style={{ height: 16, width: 88 }}
                />
              )}
              <SizedBox height={16} />
              {description && (
                <Box
                  position='relative'
                  display='flex'
                  gap={10}
                  flexDirection='column'
                >
                  <Skeleton.Button
                    active
                    style={{ height: 16, maxWidth: 612, width: '100%' }}
                  />
                  <Skeleton.Button
                    active
                    style={{ height: 16, maxWidth: 612, width: '100%' }}
                  />
                </Box>
              )}
              <SizedBox height={24} />
              <Box
                position='relative'
                display='inline-flex'
                gap={10}
                flexDirection='column'
              >
                <Skeleton.Button
                  active
                  style={{ height: 40, width: '100%' }}
                />
                <Space size={32}>
                  <Skeleton.Button
                    active
                    style={{ height: 24, width: 71 }}
                  />
                  <Skeleton.Button
                    active
                    style={{ height: 24, width: 106 }}
                  />
                  <Skeleton.Button
                    active
                    style={{ height: 24, width: 57 }}
                  />
                </Space>
              </Box>
            </>
          )}
        </Box>
      </Col>
    </Row>
  );
};
