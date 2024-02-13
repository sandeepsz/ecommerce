import GlobalStyles from '@/components/styles';
import type { AppProps } from 'next/app';
import { Inter, Space_Grotesk } from 'next/font/google';
import '../public/antd.min.css';
import withTheme from '../theme';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return withTheme(
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>,
  );
}
