import { styled } from 'styled-components';

interface HeadingProps {
  color?: string;
}

export const H1 = styled.h1<HeadingProps>`
  font-size: 80px;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  line-height: 84px;
  letter-spacing: -3px;
  color: ${(props) => props.color || props.theme.token.black9};
  margin: 0;
`;

export const H2 = styled.h2<HeadingProps>`
  font-size: 72px;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  line-height: 76px;
  letter-spacing: -2px;
  color: ${(props) => props.color || props.theme.token.black9};
  margin: 0;
`;

export const H3 = styled.h3<HeadingProps>`
  font-size: 54px;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -1px;
  color: ${(props) => props.color || props.theme.token.black9};
  margin: 0;
`;

export const H4 = styled.h4<HeadingProps>`
  font-size: 40px;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -0.4px;
  color: ${(props) => props.color || props.theme.token.black9};
  margin: 0;
`;

export const H5 = styled.h5<HeadingProps>`
  font-size: 34px;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: -0.6px;
  color: ${(props) => props.color || props.theme.token.black9};
  margin: 0;
`;

export const H6 = styled.h6<HeadingProps>`
  font-size: 28px;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.6px;
  color: ${(props) => props.color || props.theme.token.black9};
  margin: 0;
`;

export const H7 = styled.h6<HeadingProps>`
  font-size: 20px;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: ${(props) => props.color || props.theme.token.black9};
  margin: 0;
`;
