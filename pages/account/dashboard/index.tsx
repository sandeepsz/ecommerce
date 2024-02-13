import Text from '@/ui/text';

import { AccountLayout } from '@/components/account/layout';

const user = {
  name: 'Omar',
};

const Dashboard = () => {
  return (
    <AccountLayout pageHeader='My Account'>
      <Text size='18'>
        Hello {user.name} (not {user.name}? Log out)
        <br />
        <br />
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </Text>
    </AccountLayout>
  );
};

export default Dashboard;
