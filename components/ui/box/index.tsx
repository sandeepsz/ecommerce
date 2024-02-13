import { CSSProperties } from 'react';

interface BoxProps extends CSSProperties {
  children?: React.ReactNode;
}

export default function Box({ children, ...props }: BoxProps) {
  return <div style={{ ...props }}>{children}</div>;
}
