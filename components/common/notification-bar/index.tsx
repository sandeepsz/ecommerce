import { ButtonText } from "@/ui/text";
import useBreakpoints from "@/utils/useBreakpoints";
import { useState } from "react";
import { useTheme } from "styled-components";
import Icon from "../../icons";
import { IconWrapper, Wrapper } from "./styles";

export const NotificationBar = ({
  children,
  bg,
  mode = "light",
}: {
  children: string;
  bg?: string;
  mode?: "dark" | "light";
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Wrapper hidden={isClosed} bg={bg}>
      <ButtonText size="xSmall" color={mode}>
        {children}
      </ButtonText>
      <IconWrapper onClick={() => setIsClosed(true)}>
        <Icon
          type="close"
          size={md ? 20 : 18}
          color={mode === "light" ? "white" : theme.token.black9}
        />
      </IconWrapper>
    </Wrapper>
  );
};
