// Store
import { wrapper } from '../redux/store';

// Global Components
import Layout from '../components/1-layout/Layout';

// React Types
import { FC } from 'react';

// Next Types
import type { AppProps } from 'next/app';

// Global Styles
import '../styles/globals.scss';
import '../styles/tailwind.css';

// Page Styles
import '../styles/4-about-scss/0-about.scss';

const ValentinesCard: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(ValentinesCard);
