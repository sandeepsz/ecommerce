import { type CSSProperties } from 'react';

import { useTheme } from 'styled-components';

import Button from '@/ui/button';
import Text from '@/ui/text';
import SizedBox from '@/ui/sized-box';

import Icon from '@/components/icons';

import {
  Flex,
  StyledDivider,
  StyledLayoutButton,
  StyledLayoutButtonGroup,
  StyledToolbar,
} from './styles';
import { FilterButtons } from './filter-buttons';

import useBreakpoints from '@/utils/useBreakpoints';

export type Cols = 2 | 3 | 4 | 'list';

type ToolbarProps = {
  cols: Cols;
  setCols: (cols: Cols) => void;
  productCount: number;
  activeFilters?: string[];
  onFilterClick?: () => void;
  onSortClick?: () => void;
  style?: CSSProperties;
};

export const Toolbar = ({
  cols,
  setCols,
  productCount,
  activeFilters,
  onFilterClick,
  onSortClick,
  style,
}: ToolbarProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  const isFilterActive = activeFilters && activeFilters.length > 0;

  const productCountText = (
    <Text
      size={md ? '16' : '14'}
      color={theme.token.black6}
    >
      {productCount} products
    </Text>
  );

  const filterButton = (
    <Button
      size='small'
      rightIcon='filter'
      type='text'
      onClick={onFilterClick}
    >
      Filter
    </Button>
  );

  const sortButton = (
    <Button
      size='small'
      rightIcon={md ? 'chevron-down' : undefined}
      type={md ? 'text' : 'underline'}
      onClick={onSortClick}
    >
      Sort by
    </Button>
  );

  const desktopToolbar = (
    <Flex>
      {productCountText}
      <Flex gap={32}>
        {filterButton}
        {sortButton}
        <StyledLayoutButtonGroup>
          <StyledLayoutButton
            //
            // TODO: add 5 col layout
            //
            disabled
            style={{ pointerEvents: 'none' }}
            // isActive={cols === 5}
            // onClick={() => {
            //   setCols(5);
            // }}
          >
            <Icon
              type='five-cols'
              size={24}
            />
          </StyledLayoutButton>
          <StyledLayoutButton
            isActive={cols === 4}
            onClick={() => {
              setCols(4);
            }}
          >
            <Icon
              type='four-cols'
              size={24}
            />
          </StyledLayoutButton>
          <StyledLayoutButton
            isActive={cols === 3}
            onClick={() => {
              setCols(3);
            }}
          >
            <Icon
              type='three-cols'
              size={24}
            />
          </StyledLayoutButton>
          <StyledLayoutButton
            isActive={cols === 2}
            onClick={() => {
              setCols(2);
            }}
          >
            <Icon
              type='two-cols-vertical'
              size={24}
            />
          </StyledLayoutButton>
          <StyledLayoutButton
            isActive={cols === 'list'}
            onClick={() => {
              setCols('list');
            }}
          >
            <Icon
              type='two-cols-horizontal'
              size={24}
            />
          </StyledLayoutButton>
        </StyledLayoutButtonGroup>
      </Flex>
    </Flex>
  );

  const mobileToolbar = (
    <>
      <Flex>
        {productCountText}
        {sortButton}
      </Flex>
      <StyledDivider />
      <Flex>
        {filterButton}
        <StyledLayoutButtonGroup>
          <StyledLayoutButton
            isActive={cols === 2}
            onClick={() => {
              setCols(2);
            }}
          >
            <Icon
              type='two-cols-vertical'
              size={19}
            />
          </StyledLayoutButton>
          <StyledLayoutButton
            isActive={cols === 'list'}
            onClick={() => {
              setCols('list');
            }}
          >
            <Icon
              type='two-cols-horizontal'
              size={19}
            />
          </StyledLayoutButton>
        </StyledLayoutButtonGroup>
      </Flex>
    </>
  );

  return (
    <StyledToolbar style={style}>
      {md ? desktopToolbar : mobileToolbar}

      {isFilterActive && (
        <>
          <SizedBox height={md ? 12 : 16} />
          <FilterButtons filters={activeFilters} />
        </>
      )}
    </StyledToolbar>
  );
};
