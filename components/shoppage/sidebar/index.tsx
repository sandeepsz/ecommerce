import { type ReactNode } from 'react';

import { StyledSidebar } from './styles';

type SidebarProps = {
  children: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return <StyledSidebar>{children}</StyledSidebar>;
};
