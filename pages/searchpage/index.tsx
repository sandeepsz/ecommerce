import Heading from '@/ui/headings';
import { ButtonText } from '@/ui/text';

import { Layout } from '@/components/common/layout';
import { SearchResults } from '@/components/searchpage';
import { StyledSearchHeader } from '@/components/searchpage/styles';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

import { productGrid4 } from '@/data/product';
import useBreakpoints from '@/utils/useBreakpoints';
import SizedBox from '@/ui/sized-box';

const SearchPage = () => {
  const { md } = useBreakpoints();
  const term = 'Shoes';

  const desktopBreadcrumbItems = Array.from({ length: 4 }).map((_, i) => ({
    label: 'Link',
    href: '#',
  }));

  const mobileBreadcrumbItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: `"${term}" Search results`,
      href: '#',
    },
  ];

  return (
    <Layout>
      <StyledSearchHeader>
        {md ? (
          <>
            <Heading as='h4'>Search results for &quot;{term}&quot;</Heading>
            <SizedBox height={16} />
            <Breadcrumbs items={desktopBreadcrumbItems} />
          </>
        ) : (
          <>
            <ButtonText size='xLarge'>
              Search results for &quot;{term}&quot;
            </ButtonText>
            <SizedBox height={16} />
            <Breadcrumbs items={mobileBreadcrumbItems} />
          </>
        )}
      </StyledSearchHeader>
      <SearchResults products={[...productGrid4, ...productGrid4]} />
    </Layout>
  );
};

export default SearchPage;
