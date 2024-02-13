import { CSSProperties } from "react";
import { H1, H2, H3, H4, H5, H6, H7 } from "./styles";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
  children: React.ReactNode;
  style?: CSSProperties;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  normal?: boolean;
  color?: string;
}

export default function Heading({
  as,
  children,
  style,
  bold,
  semibold,
  medium = true,
  normal,
  color,
}: HeadingProps) {
  const fontWeight = {
    fontWeight: normal ? 400 : bold ? 700 : semibold ? 600 : medium ? 500 : 400,
  };

  return (
    <>
      {
        {
          h1: (
            <H1 style={{ ...style, ...fontWeight }} color={color}>
              {children}
            </H1>
          ),
          h2: (
            <H2 style={{ ...style, ...fontWeight }} color={color}>
              {children}
            </H2>
          ),
          h3: (
            <H3 style={{ ...style, ...fontWeight }} color={color}>
              {children}
            </H3>
          ),
          h4: (
            <H4 style={{ ...style, ...fontWeight }} color={color}>
              {children}
            </H4>
          ),
          h5: (
            <H5 style={{ ...style, ...fontWeight }} color={color}>
              {children}
            </H5>
          ),
          h6: (
            <H6 style={{ ...style, ...fontWeight }} color={color}>
              {children}
            </H6>
          ),
          h7: (
            <H7 style={{ ...style, ...fontWeight }} color={color}>
              {children}
            </H7>
          ),
        }[as || "h1"]
      }
    </>
  );
}
