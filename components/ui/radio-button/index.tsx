import { ReactNode } from 'react';

import { Radio } from 'antd';

import { StyledRadioWrapper } from './styles';

export const RadioButton = ({
  value,
  children,
}: {
  value: string | number;
  children: ReactNode;
}) => (
  <StyledRadioWrapper>
    <Radio
      value={value}
      style={{ width: '100%' }}
    >
      {children}
    </Radio>
  </StyledRadioWrapper>
);
