import { Form, Space } from 'antd';

import Input from '@/ui/input';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

export const AccountDetails = () => {
  const { md } = useBreakpoints();

  return (
    <>
      <Form>
        <Space
          direction='vertical'
          size={24}
          style={{ width: '100%' }}
        >
          <Form.Item name='firstname'>
            <Input
              fullWidth
              labelText='First name *'
              placeholder='First name'
            />
          </Form.Item>

          <Form.Item name='lastname'>
            <Input
              fullWidth
              labelText='Last name *'
              placeholder='Last name'
            />
          </Form.Item>

          <Form.Item
            name='displayname'
            rules={[
              { required: true, message: 'Please input your displayname!' },
            ]}
          >
            <Input
              fullWidth
              labelText='Display name *'
              placeholder='Display name'
              hint='This will be how your name will be displayed in the account section and in reviews'
            />
          </Form.Item>

          <Form.Item
            name='emailaddress'
            rules={[
              {
                required: true,
                message: 'Please input your emailaddress!',
              },
            ]}
          >
            <Input
              fullWidth
              labelText='Email address *'
              placeholder='Email address'
            />
          </Form.Item>
        </Space>
      </Form>
      <Form>
        <Text
          size='18'
          semibold
        >
          Password change
        </Text>
        <SizedBox height={md ? 32 : 24} />
        <Space
          direction='vertical'
          size={24}
          style={{ width: '100%' }}
        >
          <Form.Item name='oldpassword'>
            <Input
              fullWidth
              labelText='Old password'
              placeholder='Old password'
            />
          </Form.Item>
          <Form.Item name='newpassword'>
            <Input
              fullWidth
              labelText='New password'
              placeholder='New password'
            />
          </Form.Item>
          <Form.Item name='repeatnewpassword'>
            <Input
              fullWidth
              labelText='Repeat new password'
              placeholder='Repeat new password'
            />
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};
