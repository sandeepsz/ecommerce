import { CSSProperties, ReactNode } from 'react';
import { StyledPopup } from './styles';
import Icon from '@/components/icons';
import useBreakpoints from '@/utils/useBreakpoints';
import Box from '@/components/ui/box';
import { UnstyledButton } from '../button/styles';
import { Col, Row } from 'antd';

type PopupProps = {
  title?: ReactNode;
  closable?: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  style?: CSSProperties;
  width?: number;
};

export const Popup = ({
  title,
  closable = true,
  isOpen,
  onClose,
  children,
  style,
  width,
}: PopupProps) => {
  const { md } = useBreakpoints();

  return (
    <StyledPopup
      open={isOpen}
      onCancel={onClose}
      centered
      closable={false}
      maskClosable
      footer={null}
      style={style}
      width={width}
    >
      <Box
        display='flex'
        justifyContent='space-between'
      >
        {title}
        {closable && (
          <UnstyledButton onClick={onClose}>
            <Icon
              type='close'
              size={md ? 40 : 32}
            />
          </UnstyledButton>
        )}
      </Box>
      {children}
    </StyledPopup>
  );
};
