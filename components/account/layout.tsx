import type { ReactNode } from 'react';
import { Col, Row } from 'antd';

import Heading from '@/ui/headings';
import { Layout } from '@/components/common/layout';

import { AccountMenu } from './menu';
import { StyledAccountPageContent, StyledAccountPageHeder } from './styles';

import useBreakpoints from '@/utils/useBreakpoints';
import { accountMenuItems } from '@/data/account';

type AccountLayoutProps = {
  children: ReactNode;
  pageHeader: string;
};

export const AccountLayout = ({ children, pageHeader }: AccountLayoutProps) => {
  const { md } = useBreakpoints();

  return (
    <Layout>
      <StyledAccountPageHeder>
        <Heading
          as={md ? 'h3' : 'h4'}
          style={{ textAlign: 'center' }}
        >
          {pageHeader}
        </Heading>
      </StyledAccountPageHeder>
      <StyledAccountPageContent>
        <Row gutter={md ? 32 : [0, 32]}>
          <Col
            span={24}
            md={4}
            offset={md ? 2 : 0}
          >
            <AccountMenu
              user={{
                name: 'Omar',
                avatar: '/images/avatar/account.png',
              }}
              items={accountMenuItems}
            />
          </Col>
          <Col
            span={24}
            md={16}
          >
            {children}
          </Col>
        </Row>
      </StyledAccountPageContent>
    </Layout>
  );
};
