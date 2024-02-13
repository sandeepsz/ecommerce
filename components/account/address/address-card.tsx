import Text from '@/ui/text';
import Button from '@/ui/button';

import useBreakpoints from '@/utils/useBreakpoints';

import { StyledAddressCard, StyledHeader } from './styles';

type AddressCardProps = {
  type: string;
  name: string;
  company: string;
  address: string;
  country: string;
};

export const AddressCard = ({
  type,
  name,
  company,
  address,
  country,
}: AddressCardProps) => {
  const { md } = useBreakpoints();

  return (
    <StyledAddressCard>
      <StyledHeader>
        <Text
          size={md ? '18' : '16'}
          semibold
        >
          {type}
        </Text>
        <Button
          size={md ? 'small' : 'xSmall'}
          type='text'
          roundness='text'
          leftIcon='edit'
          iconSize={md ? 20 : 18}
        >
          Edit
        </Button>
      </StyledHeader>
      <Text size={md ? '18' : '16'}>
        {name}
        <br />
        {company}
        <br />
        {address}
        <br />
        {country}
      </Text>
    </StyledAddressCard>
  );
};
