import { Slider, Space } from 'antd';
import { css, styled } from 'styled-components';

import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

type StyledListProps = {
  scrollable?: boolean;
};

//
//
// TODO: add scrollbar styles
//
//
export const StyledList = styled(Space).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledListProps>([
    'scrollable',
  ]),
})<StyledListProps>`
  width: 100%;

  ${({ scrollable }) =>
    scrollable &&
    css`
      overflow-y: auto;
      height: 192px;
    `}
`;

export const StyledSlider = styled(Slider)`
  margin: 0;
  padding-top: 8px;
  padding-bottom: 7px;

  .ant-slider-track,
  .ant-slider-rail {
    height: 1px;
    background: ${({ theme }) => theme.token.black3};
  }

  .ant-slider-handle {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: black;
  }

  .ant-slider-handle:before,
  .ant-slider-handle:after {
    display: none;
  }
`;
