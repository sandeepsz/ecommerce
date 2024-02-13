import { useState } from 'react';

import { Col, Row, Space } from 'antd';

import Button from '@/ui/button';
import Container from '@/ui/container';
import { ButtonSwatch, ColorSwatch } from '@/ui/swatches';

import {
  ProductGrid,
  ProductGridSkeleton,
  ProductCardSkeleton,
  ProductCard,
  ProductListCard,
  ProductListCardSkeleton,
} from '@/components/common/product';
import { type Cols, Toolbar } from '@/components/shoppage/toolbar';

import { useDelay } from '@/hooks/use-delay';
import useBreakpoints from '@/utils/useBreakpoints';

import { ProductCardProps } from '@/types';

import { Sidebar } from '../sidebar';
import { FilterHeader, FilterList, FilterSlider } from '../filter';
import { StyledDrawer } from './styles';

type ShopPageProductsProps = {
  defaultSidebarOpen?: boolean;
  defaultCols?: Cols;
  products: ProductCardProps[];
};

type PriceRange = {
  min: number;
  max: number;
};

const PRICE_RANGE: PriceRange = {
  min: 25,
  max: 3000,
};

export const ShopPageProducts = ({
  defaultSidebarOpen = false,
  defaultCols = 4,
  products,
}: ShopPageProductsProps) => {
  const isLoading = useDelay(4000);
  const [cols, setCols] = useState<Cols>(defaultCols);
  const [isFilterVisible, setIsFilterVisible] = useState(defaultSidebarOpen);
  const [priceRange, setPriceRange] = useState<PriceRange>({ ...PRICE_RANGE });
  const { md } = useBreakpoints();

  const isList = cols === 'list';

  const loading = isList ? (
    <Space
      size={md ? 48 : 24}
      direction='vertical'
      style={{ width: '100%' }}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <ProductListCardSkeleton key={i} />
      ))}
    </Space>
  ) : (
    <ProductGridSkeleton
      cols={cols}
      renderSkeleton={(props) => (
        <ProductCardSkeleton
          {...props}
          rating={md ? true : false}
        />
      )}
    />
  );

  const productGrid = isList ? (
    <Space
      size={md ? 48 : 24}
      direction='vertical'
      style={{ marginTop: md ? 24 : 0, width: '100%' }}
    >
      {products.map((product) => (
        <ProductListCard
          key={product.name}
          // just for demo
          description='Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
          {...product}
        />
      ))}
    </Space>
  ) : (
    <ProductGrid
      cols={cols}
      products={products}
      renderProduct={({ label, rating, ...rest }) => (
        <ProductCard
          ratingColor='orange'
          rating={md ? rating : undefined}
          {...rest}
        />
      )}
    />
  );

  const filters = (
    <>
      <FilterHeader
        onClose={() => {
          setIsFilterVisible(false);
        }}
      />
      <Space
        size={40}
        direction='vertical'
        style={{ width: '100%' }}
      >
        <FilterList
          title='CATEGORIES'
          activeKey='clothing'
          filters={[
            { key: 'home-and-decor', label: 'Home & Decor' },
            { key: 'clothing', label: 'Clothing' },
            { key: 'accessories', label: 'Accessories' },
            { key: 'outdoor', label: 'Outdoor' },
          ]}
          onFilterChange={({ key }) => null}
        />

        <ColorSwatch
          title='COLOR'
          activeKey='teal-500'
          filters={[
            { key: 'teal-500', color: '#20C997' },
            { key: 'indigo-200', color: '#AF83F8' },
            { key: 'red-400', color: '#E25563' },
            { key: 'black-900', color: '#121212' },
          ]}
          onFilterChange={({ key }) => null}
        />

        <Space
          size={16}
          direction='vertical'
          style={{ width: '100%' }}
        >
          <ButtonSwatch
            title='Size'
            activeKey='small'
            filters={[
              { key: 'small', label: 'S' },
              { key: 'medium', label: 'M' },
              { key: 'large', label: 'L' },
              { key: 'xlarge', label: 'XL' },
            ]}
            onFilterChange={({ key }) => null}
            size={16}
          />
          <ButtonSwatch
            activeKey='one-size'
            filters={[
              { key: 'one-size', label: 'One size' },
              { key: 'Custom', label: 'Custom' },
            ]}
            onFilterChange={({ key }) => null}
            size={16}
          />
        </Space>

        <FilterSlider
          title='PRICE'
          valuePrefix='$'
          currentMin={priceRange.min}
          currentMax={priceRange.max}
          min={PRICE_RANGE.min}
          max={PRICE_RANGE.max}
          step={25}
          onChange={({ min, max }) => {
            setPriceRange({ min, max });
          }}
        />

        <FilterList
          title='STYLE'
          activeKey='streetwear'
          filters={[
            { key: 'modern', label: 'Modern' },
            { key: 'streetwear', label: 'Streetwear' },
            { key: 'colorfull', label: 'Colorfull' },
            { key: 'patchwork', label: 'Patchwork' },
            { key: 'bohemian', label: 'Bohemian' },
            { key: 'vintage', label: 'Vintage' },

            { key: 'classic', label: 'Classic' },
            { key: 'minimalist', label: 'Minimalist' },
            { key: 'retro', label: 'Retro' },
            { key: 'scandinavian', label: 'Scandinavian' },
          ]}
          onFilterChange={({ key }) => null}
          scrollable
        />
      </Space>
    </>
  );

  return (
    <Container
      py={0}
      pb={{ base: 48, md: isList ? 52 : 80 }}
    >
      <Row gutter={32}>
        {md ? (
          isFilterVisible && (
            <Col span={6}>
              <Sidebar>{filters}</Sidebar>
            </Col>
          )
        ) : (
          <StyledDrawer
            open={isFilterVisible}
            placement='left'
            closable={false}
            width={310}
          >
            {filters}
          </StyledDrawer>
        )}

        <Col
          span={24}
          md={isFilterVisible ? 18 : 24}
        >
          <Toolbar
            cols={cols}
            setCols={setCols}
            productCount={products.length}
            activeFilters={['plants', 'plants']}
            onFilterClick={() => {
              setIsFilterVisible(!isFilterVisible);
            }}
            onSortClick={() => null}
          />

          {isLoading ? loading : productGrid}

          <Button
            centered
            size={md ? 'medium' : 'xSmall'}
            roundness='rounded'
            style={{ marginTop: md ? (isList ? 0 : '80px') : '40px' }}
          >
            Load More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
