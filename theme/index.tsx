import React from "react";

import { ConfigProvider } from "antd";

import { ThemeConfig } from "antd/es/config-provider/context";
import { ThemeProvider } from "styled-components";

const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: "#121212",
    colorText: "#3E3E59",
  },
  components: {},
};

// Use styles from antd and also add new styles which are not available in antd
const styledComponentsTheme = {
  ...defaultTheme,
  token: {
    ...defaultTheme.token,
    black50: "#FAFAFB",
    black1: "#F5F5F5",
    black2: "#EAEAEA",
    black3: "#CBCBCB",
    black4: "#A7A7A7",
    black5: "#807E7E",
    black6: "#605F5F",
    black7: "#454545",
    black8: "#2B2B2B",
    black9: "#121212",
    teal6: "#1BA97F",
    teal5: "#20C997",
    red1: "#F2B6BC",
    red5: "#DC3545",
    orange5: "#FD7E14",
    indigo4: "#7E36F4",
    mango: "#F5C658",
    yellow: "#FFD43B",
    lighYellow: "#FFF3C2",
  },
};

const withTheme = (node: React.ReactElement) => (
  <>
    <ConfigProvider theme={defaultTheme}>
      <ThemeProvider theme={styledComponentsTheme}>{node}</ThemeProvider>
    </ConfigProvider>
  </>
);

export default withTheme;

export type StyledComponentsTheme = typeof styledComponentsTheme;
