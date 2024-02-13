import AspectRatio from '@/ui/aspect-ratio';
import { StyledContent, StyledWishlistItem } from './styles';
import Image from 'next/image';
import { Space } from 'antd';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { useTheme } from 'styled-components';
import { formatPrice } from '@/utils/formatPrice';
import Button from '@/ui/button';

type WishlistItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  variant: {
    size: string;
    color: string;
  };
};
export const WishlistItem = ({
  id,
  name,
  image,
  price,
  variant,
}: WishlistItem) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <StyledWishlistItem>
      <StyledContent>
        <Image
          src={image}
          alt={name}
          height={170}
          width={128}
          style={{ objectFit: 'cover' }}
        />
        <Space
          size={8}
          direction='vertical'
        >
          <Text
            size={md ? '18' : '16'}
            semibold
          >
            {name}
          </Text>
          <Text
            size={md ? '14' : '12'}
            color={theme.token.black6}
          >
            Size: {variant.size}, Color: {variant.color}
          </Text>
          {!md && <Text size='16'>{formatPrice(price)}</Text>}
          <Button
            type='text'
            size='xSmall'
            leftIcon='trash'
            iconSize={18}
          >
            Remove
          </Button>
        </Space>
      </StyledContent>
      {md && <Text size='18'>{formatPrice(price)}</Text>}
      <Button
        fill='outline'
        borderColor={theme.token.black3}
        color='light'
        size={md ? 'medium' : 'small'}
        fullWidth={md ? false : true}
      >
        Select options
      </Button>
    </StyledWishlistItem>
  );
};
