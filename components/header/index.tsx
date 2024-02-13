import { useState } from "react";
import { useRouter } from "next/router";

import { Badge, List, Popover } from "antd";

import Button from "@/ui/button";
import { IconButton } from "@/ui/button/icon";
import Container from "@/ui/container";

import { SearchPopup } from "@/components/common/search";

import { headerNavigationLinks } from "@/data/navigation";

import {
  Branding,
  CartButton,
  Icons,
  Navigation,
  NavigationBar,
  NavigationList,
  Wrapper,
} from "./styles";
import Icon from "../icons";

export default function Header({
  hideOnMobile = true,
  align = "center",
  onCartClick,
}: {
  hideOnMobile?: boolean;
  align?: "left" | "center";
  onCartClick?: () => void;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Wrapper hideOnMobile={hideOnMobile}>
        <Container py={18}>
          <NavigationBar align={align}>
            <Branding>
              <Icon type="logo" size={35} />
            </Branding>
            <Navigation>
              {headerNavigationLinks.map((item, id) => {
                if (item.children) {
                  return (
                    <Popover
                      key={id}
                      content={
                        <NavigationList>
                          {item.children.map((child, index) => {
                            return (
                              <List.Item key={index}>
                                <Button
                                  size="xSmall"
                                  color="light"
                                  type="text"
                                  fullWidth
                                  onClick={() => {
                                    router.push(child.url);
                                  }}
                                >
                                  {child.label}
                                </Button>
                              </List.Item>
                            );
                          })}
                        </NavigationList>
                      }
                    >
                      <Button
                        size="xSmall"
                        color="light"
                        type="text"
                        rightIcon="chevron-down"
                        onClick={() => {
                          router.push(item.url);
                        }}
                      >
                        {item.label}
                      </Button>
                    </Popover>
                  );
                } else {
                  return (
                    <Button key={id} size="xSmall" color="light" type="text">
                      {item.label}
                    </Button>
                  );
                }
              })}
            </Navigation>
            <div style={{ ...(align === "left" && { marginLeft: "auto" }) }}>
              <Icons>
                <IconButton
                  onClick={() => {
                    setIsSearchOpen(true);
                  }}
                >
                  <Icon type="search" size={28} />
                </IconButton>
                <IconButton>
                  <Icon type="user" size={28} />
                </IconButton>
                <CartButton onClick={onCartClick}>
                  <Icon type="bag" size={28} />
                  <Badge count={5} size="small" />
                </CartButton>
              </Icons>
            </div>
          </NavigationBar>
        </Container>
      </Wrapper>
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false);
        }}
      />
    </>
  );
}
