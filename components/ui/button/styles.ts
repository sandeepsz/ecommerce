import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import styled, { css } from 'styled-components';

interface WrapperProps {
  size?: 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
  type?: 'default' | 'square' | 'underline' | 'text';
  fill?: 'solid' | 'outline';
  color?: 'light' | 'dark';
  borderColor?: string;
  roundness?: 'pill' | 'rounded' | 'sharp' | 'underline' | 'text';
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  gap?: number;
  fullWidth?: boolean;
  center?: boolean;
}

export const IconWrapperLeft = styled.span`
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
`;
export const IconWrapperRight = styled.span`
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled('div').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<WrapperProps>([
    'size',
    'type',
    'fill',
    'color',
    'roundness',
    'borderColor',
    'hasLeftIcon',
    'hasRightIcon',
    'gap',
    'fullWidth',
    'center',
  ]),
})<WrapperProps>`
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  ${({ center }) => center && 'margin: 0 auto;'}

  &:hover {
    .ant-btn,
    .ant-default {
      ${({ size, type }) => {
        if (type === 'default') {
          switch (size) {
            case 'xLarge':
              return css`
                padding: 15px 55px 13px;
              `;
            case 'large':
              return css`
                padding: 15px 44px 23px;
              `;
            case 'medium':
              return css`
                padding: 8px 26px 12px;
              `;
            case 'small':
              return css`
                padding: 7px 24px 11px;
              `;
            case 'xSmall':
              return css`
                padding: 6px 20px 10px;
              `;
          }
        } else if (type === 'square') {
          switch (size) {
            case 'xLarge':
              return css`
                padding: 10px 14px 18px;
              `;
            case 'large':
              return css`
                padding: 8px 12px 16px;
              `;
            case 'medium':
              return css`
                padding: 8px 10px 12px;
              `;
            case 'small':
              return css`
                padding: 7px 9px 11px;
              `;
            case 'xSmall':
              return css`
                padding: 8px 11px 12px;
              `;
          }
        } else {
          return css`
            padding: 0px;
          `;
        }
      }}
    }
  }

  .ant-btn,
  .ant-btn-default {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    max-width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

    ${({ size, type }) => {
      if (type === 'default') {
        switch (size) {
          case 'xLarge':
            return css`
              padding: 19px 55px;
            `;
          case 'large':
            return css`
              padding: 19px 44px;
            `;
          case 'medium':
            return css`
              padding: 10px 26px;
            `;
          case 'small':
            return css`
              padding: 9px 24px;
            `;
          case 'xSmall':
            return css`
              padding: 8px 20px;
            `;
        }
      } else if (type === 'square') {
        switch (size) {
          case 'xLarge':
            return css`
              padding: 14px;
            `;
          case 'large':
            return css`
              padding: 12px;
            `;
          case 'medium':
            return css`
              padding: 10px;
            `;
          case 'small':
            return css`
              padding: 9px;
            `;
          case 'xSmall':
            return css`
              padding: 11px;
            `;
        }
      } else {
        return css`
          padding: 0px;
        `;
      }
    }}

    ${({ fill, theme, color, borderColor }) => {
      if (color === 'light') {
        switch (fill) {
          case 'solid':
            return css`
              background-color: ${theme.token.black9};
              border-color: ${borderColor || theme.token.black9};
            `;
          case 'outline':
            return css`
              background-color: transparent;
              border-color: ${borderColor || theme.token.black9};
            `;
        }
      } else {
        switch (fill) {
          case 'solid':
            return css`
              background-color: white;
              border-color: white;
            `;
          case 'outline':
            return css`
              background-color: transparent;
              border-color: white;
            `;
        }
      }
    }}

    ${({ roundness, theme, type }) => {
      switch (roundness) {
        case 'pill':
          return css`
            border-radius: 50px;
          `;
        case 'rounded':
          return css`
            border-radius: 6px;
          `;
        case 'sharp':
          return css`
            border-radius: 0px;
          `;
        case 'underline':
          return css`
            border-radius: 0px;
          `;
        case 'text':
          return css`
            border-radius: 0px;
          `;
      }
    }}

    
    ${({ type, theme, color }) => {
      switch (type) {
        case 'default':
          return css`
            border-width: 2px;
            border-style: solid;
          `;
        case 'square':
          return css`
            border-width: 2px;
            border-style: solid;
          `;
        case 'underline':
          return css`
            background-color: transparent;
            padding: 0px;
            border-radius: 0px;
            border-width: 0px;
            border-bottom: 1px solid
              ${color === 'light' ? theme.token.black9 : 'white'};
          `;
        case 'text':
          return css`
            border-width: 0px;
            background-color: transparent;
            padding: 0px;
          `;
      }
    }}

    ${IconWrapperLeft} {
      ${({ hasLeftIcon, gap }) =>
        hasLeftIcon &&
        css`
          margin-right: ${gap}px;
        `}
    }

    ${IconWrapperRight} {
      ${({ hasRightIcon, gap }) =>
        hasRightIcon &&
        css`
          margin-left: ${gap}px;
        `}
    }
  }
`;

export const UnstyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  box-shadow: none;
`;

type PlayButtonWrapProps = {
  fill?: 'light' | 'dark';
};

export const PlayButtonWrap = styled(UnstyledButton).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<PlayButtonWrapProps>([
    'fill',
  ]),
})<PlayButtonWrapProps>`
  background: ${({ fill }) => (fill === 'light' ? 'white' : 'black')};
  width: 65px;
  height: 65px;
  border-radius: 96px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${media.md`
    width: 96px;
    height: 96px;
  `}
`;
