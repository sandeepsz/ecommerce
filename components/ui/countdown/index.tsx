import { Space } from 'antd';

import Text, { ButtonText } from '@/components/ui/text';
import Heading from '@/components/ui/headings';

import { useCountdown } from '@/hooks/use-countdown';
import useBreakpoints from '@/utils/useBreakpoints';

import { StyledBlocks, StyledNumberCell } from './styles';

const formatDigit = (number: number) => number.toString().padStart(2, '0');

type CountdownProps = {
  timeleftinms: number;
  variant?: '1' | '2';
};

export const Countdown = ({ timeleftinms, variant = '2' }: CountdownProps) => {
  const { md } = useBreakpoints();
  const { days, hours, minutes, seconds } = useCountdown(timeleftinms);

  switch (variant) {
    case '1':
      return (
        <Space size={16}>
          <StyledBlocks>
            <StyledNumberCell>
              {md ? (
                <Heading as='h5'>{formatDigit(days)}</Heading>
              ) : (
                <ButtonText size='xLarge'>{formatDigit(days)}</ButtonText>
              )}
            </StyledNumberCell>
            <Text size='12'>Days</Text>
          </StyledBlocks>
          <StyledBlocks>
            <StyledNumberCell>
              {md ? (
                <Heading as='h5'>{formatDigit(hours)}</Heading>
              ) : (
                <ButtonText size='xLarge'>{formatDigit(hours)}</ButtonText>
              )}
            </StyledNumberCell>
            <Text size='12'>Hours</Text>
          </StyledBlocks>
          <StyledBlocks>
            <StyledNumberCell>
              {md ? (
                <Heading as='h5'>{formatDigit(minutes)}</Heading>
              ) : (
                <ButtonText size='xLarge'>{formatDigit(minutes)}</ButtonText>
              )}
            </StyledNumberCell>
            <Text size='12'>Minutes</Text>
          </StyledBlocks>
          <StyledBlocks>
            <StyledNumberCell>
              {md ? (
                <Heading as='h5'>{formatDigit(seconds)}</Heading>
              ) : (
                <ButtonText size='xLarge'>{formatDigit(seconds)}</ButtonText>
              )}
            </StyledNumberCell>
            <Text size='12'>Seconds</Text>
          </StyledBlocks>
        </Space>
      );
    case '2':
      return (
        <Heading as={md ? 'h5' : 'h6'}>
          {formatDigit(days)}d : {formatDigit(hours)}h : {formatDigit(minutes)}m
          : {formatDigit(seconds)}s
        </Heading>
      );
  }
};
