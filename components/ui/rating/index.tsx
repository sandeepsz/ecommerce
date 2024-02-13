import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import { Rate } from 'antd';
import { styled } from 'styled-components';

type StyledRatingProps = {
  // add required colors later
  color?: 'orange';
};

const Rating = styled(Rate).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledRatingProps>([
    'color',
  ]),
})<StyledRatingProps>`
  margin: 0;
  padding: 0;
  font-size: 16px;

  .ant-rate-star {
    margin-right: 2px !important;
  }

  .ant-rate-star,
  .ant-rate-star-second,
  .ant-rate-star-first {
  }

  .ant-rate-star-first,
  .ant-rate-star-full {
    color: ${({ color, theme }) =>
      color === 'orange' ? theme.token.orange5 : theme.token.black9} !important;
  }
`;

export default Rating;
