import Image from 'next/image';

import { Breadcrumbs } from '@/ui/breadcrumbs';
import SizedBox from '@/ui/sized-box';
import Heading from '@/ui/headings';
import Text from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

import {
  StyledContainer,
  StyledContent,
  StyledContentWrapper,
  StyledImagePlaceholder,
  StyledPageHeader,
} from './styles';

export type Position = 'center' | 'left';

export type Variant = 'boxed' | 'full' | 'simple';

type PageHeaderProps = {
  variant?: Variant;
  position?: Position;
  title: string;
  description: string;
  breadcrumbs?: boolean;
  background?: {
    src: string;
    alt: string;
  };
};

export const PageHeader = ({
  variant = 'boxed',
  position = 'center',
  title,
  description,
  breadcrumbs = true,
  background,
}: PageHeaderProps) => {
  const { md } = useBreakpoints();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];

  return (
    <StyledContainer variant={variant}>
      <StyledPageHeader>
        {variant !== 'simple' && background && (
          <StyledImagePlaceholder>
            <Image
              src={background.src}
              alt={background.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </StyledImagePlaceholder>
        )}
        <StyledContentWrapper variant={variant}>
          <StyledContent
            position={position}
            variant={variant}
            span={24}
            md={12}
          >
            {variant !== 'simple' && breadcrumbs && (
              <>
                <Breadcrumbs items={breadcrumbItems} />
                <SizedBox height={8} />
              </>
            )}
            <Heading as={md ? 'h3' : 'h5'}>{title}</Heading>
            <SizedBox height={12} />
            <Text size={md ? '18' : '12'}>{description}</Text>
          </StyledContent>
        </StyledContentWrapper>
      </StyledPageHeader>
    </StyledContainer>
  );
};
