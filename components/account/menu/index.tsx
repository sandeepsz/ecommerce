import { Avatar } from '@/ui/avatar';
import Box from '@/ui/box';

import useBreakpoints from '@/utils/useBreakpoints';
import {
  IconBox,
  StyledMenu,
  StyledMenuButton,
  StyledMenuHeader,
  StyledMenuItemsGroup,
} from './styles';
import Icon from '@/components/icons';
import Button from '@/ui/button';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';

type AccountMenuProps = {
  user: {
    name: string;
    avatar: string;
  };
  items: Array<{
    href: string;
    label: string;
  }>;
};

export const AccountMenu = ({ user, items }: AccountMenuProps) => {
  const { md } = useBreakpoints();
  const { asPath } = useRouter();

  return (
    <StyledMenu>
      <StyledMenuHeader>
        <Box
          position='relative'
          display='inline-block'
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            size={md ? 82 : 68}
          />
          <IconBox>
            <Icon
              type='camera'
              size={16}
            />
          </IconBox>
        </Box>
        {!md && (
          <Button
            type='text'
            leftIcon='logout'
            size='xSmall'
            iconSize={18}
          >
            Logout
          </Button>
        )}
      </StyledMenuHeader>
      <StyledMenuItemsGroup>
        {items.map(({ href, label }) => (
          <StyledMenuButton
            key={label}
            href={href}
            isActive={asPath === href}
          >
            {label}
          </StyledMenuButton>
        ))}
        {md && (
          <StyledMenuButton
            href='#'
            // call logout function
            onClick={() => null}
          >
            Logout
          </StyledMenuButton>
        )}
      </StyledMenuItemsGroup>
    </StyledMenu>
  );
};
