import Text from '@/ui/text';
import SizedBox from '@/ui/sized-box';

import { AddressType } from './contact-locations';

export const AddressListItem = ({ country, address }: AddressType) => {
  return (
    <div>
      <Text
        size='18'
        semibold
      >
        {country}
      </Text>
      <SizedBox height={8} />
      <Text size='16'>{address.street1}</Text>
      <Text size='16'>{address.street2}</Text>
    </div>
  );
};
