import Image from 'next/image';

import Heading from '@/ui/headings';
import Container from '@/ui/container';

import {
  StyledContainer,
  StyledContent,
  StyledContentWrapper,
  StyledImagePlaceholder,
  StyledPageHeader,
} from './styles';

import useBreakpoints from '@/utils/useBreakpoints';

export type Position = 'center' | 'left';

export type Variant = '1' | '2';

type AboutPageHeaderProps = {
  variant?: Variant;
  title: string;
  background: {
    src: string;
    alt: string;
  };
};

export const AboutPageHeader = ({
  variant = '1',
  title,
  background,
}: AboutPageHeaderProps) => {
  const { md } = useBreakpoints();

  return (
    <StyledPageHeader variant={variant}>
      <StyledContainer variant={variant}>
        {background && (
          <StyledImagePlaceholder>
            <Image
              src={background.src}
              alt={background.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </StyledImagePlaceholder>
        )}
        <Container style={{ height: '100%' }}>
          <StyledContentWrapper variant={variant}>
            <StyledContent
              position={variant === '1' ? 'center' : 'left'}
              span={24}
              md={16}
            >
              <Heading
                as={md ? 'h3' : 'h6'}
                color='white'
              >
                {title}
              </Heading>
            </StyledContent>
          </StyledContentWrapper>
        </Container>
      </StyledContainer>
    </StyledPageHeader>
  );
};
