import Heading from '@/ui/headings';
import { ButtonText } from '@/ui/text';

import { Layout } from '@/components/common/layout';
import { SearchNotFoundForm } from '@/components/searchpage';
import { StyledSearchHeader } from '@/components/searchpage/styles';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

import useBreakpoints from '@/utils/useBreakpoints';
import SizedBox from '@/ui/sized-box';

const SearchNotFoundPage = () => {
  const { md } = useBreakpoints();
  const term = 'zzzz';

  const breadcrumbsItems = [
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
      <StyledSearchHeader style={{ ...(md && { paddingBottom: 32 }) }}>
        {md ? (
          <Heading as='h4'>Search results for &quot;{term}&quot;</Heading>
        ) : (
          <ButtonText size='xLarge'>
            Search results for &quot;{term}&quot;
          </ButtonText>
        )}
        <SizedBox height={16} />
        <Breadcrumbs items={breadcrumbsItems} />
      </StyledSearchHeader>
      <SearchNotFoundForm />
    </Layout>
  );
};

export default SearchNotFoundPage;
