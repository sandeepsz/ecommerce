import { Form, Space } from 'antd';
import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Button from '@/ui/button';
import Heading from '@/ui/headings';
import Input from '@/ui/input';
import { Popup } from '@/ui/popup';
import Rating from '@/ui/rating';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

type ReviewPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 *
 * TODO: fix rating icon
 *
 */

export const ReviewPopup = ({ isOpen, onClose }: ReviewPopupProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Popup
      width={md ? 652 : undefined}
      isOpen={isOpen}
      onClose={onClose}
      title={
        md ? (
          <Heading as='h5'>Leave a review</Heading>
        ) : (
          <ButtonText size='xLarge'>Leave a review</ButtonText>
        )
      }
    >
      <SizedBox height={md ? 16 : 8} />
      <Text size='14'>
        Your email address will not be published. Required fields are marked *
      </Text>
      <SizedBox height={md ? 32 : 24} />
      <Form layout='vertical'>
        <Space size={16}>
          <Text
            size='16'
            color={theme.token.black9}
          >
            Your rating *
          </Text>
          <Form.Item
            name='rating'
            rules={[
              {
                required: true,
                message: 'Please input your rating!',
              },
            ]}
          >
            <Rating />
          </Form.Item>
        </Space>
        <Space
          size={md ? 32 : 24}
          direction='vertical'
          style={{ width: '100%', marginTop: md ? 24 : 16 }}
        >
          <Form.Item
            name='fullname'
            rules={[
              {
                required: true,
                message: 'Please input your Full name!',
              },
            ]}
          >
            <Input
              placeholder='Full name'
              variant='line'
              fullWidth
            />
          </Form.Item>
          <Form.Item
            name='emailaddress'
            rules={[
              {
                required: true,
                message: 'Please input your Email address!',
              },
            ]}
          >
            <Input
              placeholder='Email address'
              variant='line'
              fullWidth
            />
          </Form.Item>
          <Form.Item
            name='review'
            rules={[
              {
                required: true,
                message: 'Please input your review!',
              },
            ]}
          >
            <Input
              placeholder='Your review'
              variant='line'
              textArea
              fullWidth
              rows={6}
              style={{ resize: 'none' }}
            />
          </Form.Item>
          <Box
            display='flex'
            gap={md ? 24 : 12}
            flexDirection={md ? 'row' : 'column'}
            justifyContent='flex-end'
          >
            <Form.Item name='photos'>
              <Button
                color='dark'
                leftIcon='photo'
                iconSize={md ? 24 : 20}
                style={{ background: theme.token.black1 }}
                size={md ? 'medium' : 'small'}
                fullWidth={!md}
              >
                Add photos
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType='submit'
                size={md ? 'medium' : 'small'}
                fullWidth={!md}
              >
                Submit review
              </Button>
            </Form.Item>
          </Box>
        </Space>
      </Form>
    </Popup>
  );
};
