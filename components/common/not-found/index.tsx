import { useTheme } from 'styled-components';

import Heading from '@/ui/headings';
import Text from '@/ui/text';
import Icons from '@/components/icons';
import Button from '@/ui/button';

import useBreakpoints from '@/utils/useBreakpoints';
import Container from '@/ui/container';
import { StyledNotFound } from './styles';
import SizedBox from '@/ui/sized-box';

export const NotFound = () => {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <Container style={{ display: 'flex', height: '100vh' }}>
      <StyledNotFound>
        <Icons type='not-found' />
        <SizedBox height={md ? 34 : 32} />
        <Heading as={md ? 'h3' : 'h5'}>404 - Page not found</Heading>
        <SizedBox height={16} />
        <Text
          size={md ? '18' : '14'}
          style={{
            width: md ? 540 : '100%',
          }}
        >
          The page you&apos;re looking for isn&apos;t available.Try to search
          again or use the go back button below.
        </Text>
        <SizedBox height={24} />
        <Button>Go back home</Button>
      </StyledNotFound>
    </Container>
  );
};
