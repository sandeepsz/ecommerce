import { useDeferredValue, useState } from "react";

import { useTheme } from "styled-components";
import { Drawer, Space } from "antd";

import Container from "@/ui/container";
import { UnstyledButton } from "@/ui/button/styles";
import Input from "@/ui/input";
import Text from "@/ui/text";

import Icon from "@/components/icons";
import { Branding } from "@/components/header/styles";

import useBreakpoints from "@/utils/useBreakpoints";

import { StyledPopupHeader, StyledSearchInput } from "./styles";
import { SearchPopupResults } from "./search-popup-results";

type SearchPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const quickSearch = ["Jumpsuits", "Pants", "Streetwear", "Summer"];

export const SearchPopup = ({ isOpen, onClose }: SearchPopupProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const defferedSearchTerm = useDeferredValue(searchTerm);
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <>
      <Drawer
        open={isOpen}
        closable={false}
        placement="top"
        height="auto"
        style={{ maxHeight: "100vh" }}
        bodyStyle={{ padding: 0 }}
        maskClosable={false}
      >
        <Container py={0}>
          <StyledPopupHeader>
            <Branding>
              <Icon type="logo" size={30} />
            </Branding>
            <UnstyledButton onClick={onClose}>
              <Icon type="close" size={md ? 32 : 26} />
            </UnstyledButton>
          </StyledPopupHeader>
          <StyledSearchInput>
            <Input
              fullWidth
              style={{ ...(md && { width: "450px", height: "100%" }) }}
              textArea={false}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="Search products..."
              rightIcon="search"
            />
            <Space size={16}>
              <Text color={theme.token.black5} size={md ? "14" : "12"}>
                Quick Search:
              </Text>
              <Space size={md ? 16 : 12}>
                {quickSearch.map((item, index) => (
                  <Text key={index} size={md ? "14" : "12"}>
                    {item}
                  </Text>
                ))}
              </Space>
            </Space>
          </StyledSearchInput>
          <SearchPopupResults
            //
            // just for demo, remote this key prop later
            //
            key={defferedSearchTerm}
            searchTerm={defferedSearchTerm}
          />
        </Container>
      </Drawer>
    </>
  );
};
