import { type ComponentProps } from 'react';

import { useTheme } from 'styled-components';

import Heading from '@/ui/headings';
import { Popup } from '@/ui/popup';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

import { StyledTable } from './styles';

type SizeChartPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
} & Required<
  Pick<ComponentProps<typeof StyledTable>, 'dataSource' | 'columns'>
>;

export const SizeChartPopup = ({
  isOpen,
  onClose,
  title,
  columns,
  dataSource,
}: SizeChartPopupProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  const customColumns = columns.map(({ title, ...rest }) => ({
    ...rest,
    title: (
      <Text
        size={md ? '14' : '12'}
        semibold
        color={theme.token.black9}
        style={{ textAlign: 'center' }}
      >
        {title as string}
      </Text>
    ),
    render: (text: string) => (
      <Text
        size={md ? '14' : '12'}
        color={theme.token.black9}
        style={{ textAlign: 'center' }}
      >
        {text}
      </Text>
    ),
  }));

  return (
    <Popup
      width={md ? 1108 : undefined}
      isOpen={isOpen}
      onClose={onClose}
      title={
        md ? (
          <Heading as='h5'>Size Chart</Heading>
        ) : (
          <ButtonText size='xLarge'>Size Chart</ButtonText>
        )
      }
    >
      <SizedBox height={md ? 42 : 24} />
      {md ? (
        <ButtonText size='xLarge'>{title}</ButtonText>
      ) : (
        <Heading as='h7'>{title}</Heading>
      )}
      <SizedBox height={16} />
      <StyledTable
        columns={customColumns}
        dataSource={dataSource}
        pagination={{ hideOnSinglePage: true }}
      />
    </Popup>
  );
};
