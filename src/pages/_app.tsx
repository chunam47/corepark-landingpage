import '@assets/styles/global.scss';
import '@assets/styles/App.scss';

import type { AppProps } from 'next/app';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
