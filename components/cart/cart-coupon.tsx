import Input from '@/ui/input';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { Form } from 'antd';

/**
 *
 *
 * TODO: [ ] fix middle border
 *       [ ] add hover styles in input
 *
 */

export const CartCoupon = () => {
  const { md } = useBreakpoints();

  return (
    <Form>
      <ButtonText size={md ? 'large' : 'medium'}>Have a coupon?</ButtonText>
      <SizedBox height={7} />
      <Text size={md ? '14' : '12'}>
        Add your code for an instant cart discount
      </Text>
      <SizedBox height={16} />

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
  );
};
