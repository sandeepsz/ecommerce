import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { Space } from 'antd';
import { useTheme } from 'styled-components';
import { CartGoalSlider } from './slider';

export const CartGoal = ({
  text,
  progress,
}: {
  text: string;
  progress: number;
}) => {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <Space
      size={md ? 12 : 8}
      direction='vertical'
      style={{
        width: md ? 474 : '100%',
        paddingLeft: md ? 0 : 16,
        paddingRight: md ? 0 : 16,
      }}
    >
      <Text
        size={md ? '18' : '16'}
        color={theme.token.black9}
        style={{ textAlign: 'center' }}
      >
        {text}
      </Text>
      <CartGoalSlider value={progress} />
    </Space>
  );
};
