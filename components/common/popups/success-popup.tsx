import { Space } from 'antd';
import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Button from '@/ui/button';
import Heading from '@/ui/headings';
import { Popup } from '@/ui/popup';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';
import Icon from '@/components/icons';

type SuccessPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

export const SuccessPopup = ({
  isOpen,
  onClose,
  title,
  message,
}: SuccessPopupProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  const checkIcon = (
    <Box
      background={theme.token.teal6}
      display='flex'
      justifyContent='center'
      alignItems='center'
      height={md ? 36 : 30}
      width={md ? 36 : 30}
      borderRadius={100}
    >
      <Icon
        type='check'
        size={md ? 18 : 16}
      />
    </Box>
  );

  return (
    <Popup
      width={md ? 652 : undefined}
      isOpen={isOpen}
      onClose={onClose}
      closable={false}
      title={
        md ? (
          <Space size={12}>
            {checkIcon}
            <Heading as='h5'>{title}</Heading>
          </Space>
        ) : (
          <Space size={12}>
            {checkIcon}
            <ButtonText size='xLarge'>{title}</ButtonText>
          </Space>
        )
      }
    >
      <SizedBox height={md ? 16 : 12} />
      <Text size='16'>{message}</Text>
      <SizedBox height={md ? 32 : 40} />
      <Box
        display='flex'
        justifyContent='flex-end'
      >
        <Button
          htmlType='submit'
          size={md ? 'medium' : 'small'}
          fullWidth={!md}
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Popup>
  );
};
