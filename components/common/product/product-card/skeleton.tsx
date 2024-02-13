import { Skeleton } from 'antd';

import useBreakpoints from '@/utils/useBreakpoints';

import { StyledProductCard, StyledProductCardContent } from './styles';
import AspectRatio from '@/ui/aspect-ratio';

export type ProductCardSkeletonProps = {
  position?: 'left' | 'center';
  height: number;
  width: number;
  rating?: boolean;
  rounded?: boolean;
};

export const ProductCardSkeleton = ({
  position = 'left',
  height,
  width,
  rating = false,
  rounded = false,
}: ProductCardSkeletonProps) => {
  const { md } = useBreakpoints();

  return (
    <StyledProductCard>
      <AspectRatio
        ratio={width / height}
        style={{ borderRadius: rounded ? '8px' : '0' }}
      >
        <Skeleton.Image
          active
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            borderRadius: rounded ? '8px' : '0',
          }}
        />
      </AspectRatio>

      <StyledProductCardContent align={position}>
        {rating && (
          <Skeleton.Button
            active
            style={{ height: 16, width: 88 }}
          />
        )}
        <Skeleton.Button
          active
          style={{ height: md ? 28 : 24, width: '100%' }}
        />
        <Skeleton.Button
          active
          style={{ height: md ? 22 : 20, width: md ? 120 : 100 }}
        />
      </StyledProductCardContent>
    </StyledProductCard>
  );
};
