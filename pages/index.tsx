import Center from '@/ui/center';
import { List, Space, Typography } from 'antd';
import Link from 'next/link';

import { templateLinks } from '@/config/templateLinks';

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <Center style={{ minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          {templateLinks.map(({ group, links }) => (
            <>
              <Title>{group}</Title>
              <Space
                direction='vertical'
                size='large'
              >
                <List size='large'>
                  {links.map((link) => (
                    <List.Item key={link.href}>
                      <Link href={link.href}>
                        <Typography.Title level={5}>
                          Go to {link.name}
                        </Typography.Title>
                      </Link>
                    </List.Item>
                  ))}
                </List>
              </Space>
            </>
          ))}
          <Link href='/style-system'>
            <Typography.Title level={5}>Go to Style System</Typography.Title>
          </Link>
        </div>
      </Center>
    </>
  );
}
