import Footer from "@/components/footer";
import Header from "@/components/header";
import { NotificationBar } from "@/components/common/notification-bar";
import { topNotification } from "@/data/notification";
import { ReactNode } from "react";
import Box from "@/ui/box";

export const Layout = ({
  children,
  hideOnMobile = true,
  variant = 1,
  barBg,
  barMode,
  headerItemsPosition,
  onCartClick,
}: {
  children: ReactNode;
  hideOnMobile?: boolean;
  variant?: 1 | 2;
  barBg?: string;
  barMode?: "dark" | "light";
  headerItemsPosition?: "left" | "center";
  onCartClick?: () => void;
}) => {
  return (
    <Box>
      {/* <NotificationBar bg={barBg} mode={barMode}>
        {topNotification}
      </NotificationBar> */}
      <Header
        align={headerItemsPosition}
        hideOnMobile={hideOnMobile}
        onCartClick={onCartClick}
      />
      {children}
      <Footer variant={variant} />
    </Box>
  );
};
