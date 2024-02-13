import { Space } from 'antd';

import { WishlistItem } from '@/components/account/wishlist';
import { AccountLayout } from '@/components/account/layout';

import { accountWishlist } from '@/data/account';

import useBreakpoints from '@/utils/useBreakpoints';
import SizedBox from '@/ui/sized-box';
import { Pagination } from '@/ui/pagination';

const Wishlist = () => {
  const { md } = useBreakpoints();

  return (
    <AccountLayout pageHeader='Wishlist'>
      <Space
        size={md ? 10 : 24}
        direction='vertical'
        style={{ width: '100%' }}
      >
        {[...accountWishlist, ...accountWishlist].map((item) => (
          <WishlistItem
            key={item.id}
            {...item}
          />
        ))}
      </Space>
      <SizedBox height={md ? 32 : 24} />
      <Pagination />
    </AccountLayout>
  );
};

export default Wishlist;
