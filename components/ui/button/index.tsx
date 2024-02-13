import Icon, { IconType } from '@/components/icons';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import { useTheme } from 'styled-components';
import { ButtonText } from '../text';
import { IconWrapperLeft, IconWrapperRight, Wrapper } from './styles';

export interface ButtonProps extends Omit<AntdButtonProps, 'size' | 'type'> {
  size?: 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
  type?: 'default' | 'square' | 'underline' | 'text';
  fill?: 'solid' | 'outline';
  color?: 'light' | 'dark';
  colorOverride?: string;
  roundness?: 'pill' | 'rounded' | 'sharp' | 'underline' | 'text';
  borderColor?: string;
  iconSize?: number;
  leftIcon?: IconType;
  rightIcon?: IconType;
  children?: React.ReactNode | IconType;
  fullWidth?: boolean;
  centered?: boolean;
}

export default function Button({
  children,
  size = 'medium',
  fill = 'solid',
  color = 'light',
  colorOverride,
  disabled,
  borderColor,
  roundness,
  iconSize: propsIconSize,
  leftIcon,
  rightIcon,
  shape,
  fullWidth,
  centered = false,
  type = 'default',
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  const iconSize =
    type === 'square'
      ? size === 'xLarge'
        ? 44
        : size === 'large'
        ? 40
        : size === 'medium'
        ? 32
        : size === 'small'
        ? 28
        : 18
      : size === 'xLarge'
      ? 32
      : size === 'large'
      ? 28
      : size === 'medium'
      ? 24
      : size === 'small'
      ? 20
      : 18;
  const gap =
    type === 'square'
      ? 0
      : size === 'xLarge'
      ? 8
      : size === 'large'
      ? 8
      : size === 'medium'
      ? 4
      : size === 'small'
      ? 4
      : 2;

  let actualColor = color;
  if (
    fill === 'outline' ||
    type === 'underline' ||
    roundness === 'underline' ||
    roundness === 'text' ||
    type === 'text'
  ) {
    actualColor = color === 'light' ? 'dark' : 'light';
  }

  const iconColor =
    colorOverride ?? actualColor === 'dark' ? theme.token.black9 : 'white';
  roundness =
    roundness ||
    (type === 'text' ? 'text' : type === 'underline' ? 'underline' : roundness);

  return (
    <Wrapper
      center={centered}
      size={size}
      fill={fill}
      color={color}
      borderColor={borderColor}
      roundness={roundness}
      type={type}
      hasLeftIcon={!!leftIcon}
      gap={gap}
      hasRightIcon={!!rightIcon}
      fullWidth={fullWidth}
    >
      <AntdButton
        disabled={disabled}
        // size={size === 'xLarge' ? 'large' : size === 'large' ? 'large' : size === 'medium' ? 'middle' : 'small'}
        {...rest}
      >
        {leftIcon && (
          <IconWrapperLeft>
            <Icon
              type={leftIcon}
              size={propsIconSize || iconSize}
              color={iconColor}
            />
          </IconWrapperLeft>
        )}
        {type === 'square' ? (
          <Icon
            type={children as IconType}
            size={propsIconSize || iconSize}
            color={iconColor}
          />
        ) : (
          <ButtonText
            size={size}
            color={actualColor}
            disabled={disabled}
          >
            {children}
          </ButtonText>
        )}
        {rightIcon && (
          <IconWrapperRight>
            <Icon
              type={rightIcon}
              size={propsIconSize || iconSize}
              color={iconColor}
            />
          </IconWrapperRight>
        )}
      </AntdButton>
    </Wrapper>
  );
}
