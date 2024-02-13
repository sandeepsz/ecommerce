import { Drawer, Form, Space } from 'antd';

import Box from '@/ui/box';
import Input from '@/ui/input';
import Button from '@/ui/button';
import Heading from '@/ui/headings';
import Text, { ButtonText } from '@/ui/text';
import { UnstyledButton } from '@/ui/button/styles';

import Icon from '@/components/icons';

import { cartItems } from '@/data/cart';
import useBreakpoints from '@/utils/useBreakpoints';

import { StyledDrawer, StyledHeader } from './styles';
import { ProductCell } from '../product-cell';
import { CartSummary } from '../cart-summary';

type CartFlyoutProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartFlyout = ({ isOpen, onClose }: CartFlyoutProps) => {
  const { md } = useBreakpoints();

  return (
    <StyledDrawer
      open={isOpen}
      placement='right'
      closable={false}
      width={md ? 460 : 343}
      maskClosable
    >
      <StyledHeader>
        {md ? (
          <Heading as='h5'>Cart</Heading>
        ) : (
          <ButtonText size='xLarge'>Cart</ButtonText>
        )}
        <UnstyledButton onClick={onClose}>
          <Icon
            type='close'
            size={md ? 32 : 24}
          />
        </UnstyledButton>
      </StyledHeader>
      <Box
        paddingBottom={8}
        flex={1}
      >
        {cartItems.map((item) => (
          <ProductCell
            switchMobile='small'
            key={item.id}
            {...item}
          />
        ))}
      </Box>
      <Space
        size={md ? 16 : 12}
        style={{ width: '100%' }}
        direction='vertical'
      >
        <Form>
          <Form.Item
            name='coupon'
            rules={[{ required: true, message: 'Please enter coupon code!' }]}
          >
            <Input
              placeholder='Input'
              buttonText='Apply'
            />
          </Form.Item>
        </Form>
        <CartSummary
          subtotal={160}
          total={160}
        />
        <Box
          display='flex'
          justifyContent='center'
        >
          <Button
            size='small'
            type='underline'
          >
            View Cart
          </Button>
        </Box>
      </Space>
    </StyledDrawer>
  );
};
