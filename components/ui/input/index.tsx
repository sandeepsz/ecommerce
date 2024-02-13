import Icon, { IconType } from '@/components/icons';
import { Input as AntdInput, InputProps as AntdInputProps, Select } from 'antd';
import { TextAreaProps as AntdTextAreaProps } from 'antd/lib/input/TextArea';
import { ReactNode, useId } from 'react';
import { useTheme } from 'styled-components';
import Button from '../button';
import Text from '../text';
import { Wrapper } from './styles';
import useBreakpoints from '@/utils/useBreakpoints';
import SizedBox from '../sized-box';
const { TextArea } = AntdInput;
const { Option } = Select;

export type InputProps = {
  variant?: 'contained' | 'line';
  labelText?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  hint?: string;
  buttonText?: string;
  selectOptions?: { label: ReactNode; value: string }[];
  textArea?: boolean;
  fullWidth?: boolean;
} & (
  | ({ textArea?: false } & AntdInputProps)
  | ({ textArea?: true } & AntdTextAreaProps)
);

export default function Input({
  variant = 'contained',
  labelText,
  leftIcon,
  rightIcon,
  hint,
  buttonText,
  selectOptions,
  textArea = false,
  fullWidth,
  prefix,
  // @ts-ignore
  suffix,
  disabled,
  ...rest
}: InputProps) {
  const theme = useTheme();
  const { md } = useBreakpoints();
  const id = useId();

  return (
    <Wrapper
      variant={variant}
      hasLeftIcon={!!leftIcon}
      hasRightIcon={!!rightIcon}
      hasButton={!!buttonText}
      hasSelect={!!selectOptions}
      fullWidth={fullWidth}
    >
      {labelText && (
        <>
          <label htmlFor={id}>
            <Text size={md ? '16' : '14'}>{labelText}</Text>
          </label>
          <SizedBox height={8} />
        </>
      )}
      {textArea ? (
        <TextArea
          id={id}
          disabled={disabled}
          {...(rest as AntdTextAreaProps)}
        />
      ) : (
        <AntdInput
          id={id}
          disabled={disabled}
          {...(rest as AntdInputProps)}
          prefix={
            leftIcon ? (
              <Icon
                type={leftIcon}
                size={24}
              />
            ) : (
              prefix
            )
          }
          suffix={
            rightIcon ? (
              <Icon
                type={rightIcon}
                size={24}
              />
            ) : (
              suffix
            )
          }
          addonAfter={
            buttonText ? (
              <Button
                type='text'
                size='xSmall'
                disabled={disabled}
              >
                {buttonText}
              </Button>
            ) : null
          }
          addonBefore={
            selectOptions ? (
              <Select
                disabled={disabled}
                defaultValue={selectOptions[0]}
                style={{ width: 120 }}
                bordered={false}
                options={selectOptions}
              />
            ) : null
          }
        />
      )}
      {hint && (
        <>
          <SizedBox height={8} />
          <Text
            size='12'
            color={theme.token.black5}
          >
            {hint}
          </Text>
        </>
      )}
    </Wrapper>
  );
}
