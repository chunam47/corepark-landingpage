import '@assets/styles/global.scss';
import '@assets/icons/metanode-landingpage/styles.css';
import '@assets/styles/App.scss';
import '@assets/styles/pc-min.scss';
import '@assets/styles/tablet.scss';
import '@assets/styles/mobile.scss';

import type { AppProps } from 'next/app';
import Layout from '../layouts';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
