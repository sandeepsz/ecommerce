import Text, { ButtonText } from '@/ui/text';
import { StyledOrderRow, StyledOrderRowItem } from './styles';
import { useTheme } from 'styled-components';
import useBreakpoints from '@/utils/useBreakpoints';

import { siteConfig } from '@/config/site';
import Button from '@/ui/button';
import SizedBox from '@/ui/sized-box';

type OrderRowProps = {
  id: string;
  date: string;
  status: string;
  total: number;
};

export const OrderRow = ({ id, date, status, total }: OrderRowProps) => {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <StyledOrderRow>
      <StyledOrderRowItem>
        {!md && <ButtonText size='small'>Order</ButtonText>}
        <Text
          size='18'
          semibold={md}
          color={theme.token.black9}
        >
          {id}
        </Text>
      </StyledOrderRowItem>
      <StyledOrderRowItem>
        {!md && <ButtonText size='small'>Date</ButtonText>}
        <Text
          size={md ? '18' : '14'}
          color={theme.token.black9}
        >
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </StyledOrderRowItem>
      <StyledOrderRowItem>
        {!md && <ButtonText size='small'>Status</ButtonText>}
        <Text
          size={md ? '18' : '14'}
          color={theme.token.black9}
        >
          {status}
        </Text>
      </StyledOrderRowItem>
      <StyledOrderRowItem>
        {!md && <ButtonText size='small'>Total</ButtonText>}
        <Text
          size={md ? '18' : '14'}
          color={theme.token.black9}
        >
          {`${siteConfig.currency.symbol}${total.toFixed(2)}`}
        </Text>
      </StyledOrderRowItem>
      {!md && <SizedBox height={8} />}
      <Button size='xSmall'>Track</Button>
    </StyledOrderRow>
  );
};
