import { styled } from 'styled-components';

import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

export const StyledSlider = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 18px;
`;

type StyledSliderRailProps = {
  percent: number;
};

export const StyledSliderRail = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledSliderRailProps>([
    'percent',
  ]),
})<StyledSliderRailProps>`
  height: 7px;
  border-radius: 45px;
  background: ${({ theme, percent }) => `
    linear-gradient(to right, ${theme.token.teal5} 0%, ${theme.token.teal5} ${percent}%, ${theme.token.black2} ${percent}%, ${theme.token.black2} 100%)
  `};
`;

export const StyledSliderHandle = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledSliderRailProps>([
    'percent',
  ]),
})<StyledSliderRailProps>`
  position: absolute;
  top: 0;
  left: ${({ percent }) => `calc(${percent}% - 22.5px)`};
  height: 45px;
  width: 45px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.token.black1};
`;
