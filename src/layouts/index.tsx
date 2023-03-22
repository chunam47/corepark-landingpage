import Footer from './footer';
import Header from './header';
import styles from '@assets/styles/Root.module.scss';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { PropsWithChildren, FC } from 'react';
interface ILayout extends PropsWithChildren {
  title?: string;
  description?: string;
}

const Layout: FC<ILayout> = ({
  children,
  title = 'Meta Node',
  description = 'Tokenomic',
}) => {
  return (
    <>
      {/* <Header /> */}
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="chrome=1; IE=edge" />

        {/* <!--  Essential META Tags --> */}
        <meta property="og:site_name" content="Metanode.co" />

        <meta name="title" property="og:title" content={title} />
        <meta name="description" property="og:description" content={description} />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content="https://metanode.co/images/metanode-thumbnail.png"
        />
        <meta name="url" property="og:url" content="https://metanode.co/" />
        <meta name="image:width" property="og:image:width" content="1200" />
        <meta name="image:height" property="og:image:height" content="628" />

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta
          name="twitter:card"
          content="https://metanode.co/images/metanode-thumbnail.png"
        />
        <meta name="twitter:image:alt" content="Meta-node app blockchain" />
        <meta name="twitter:site" content="Meta-node app blockchain" />

        {/* <!--  Non-Essential, But Required for Analytics --> */}
        <meta name="referrer" content="origin" />
      </Head>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default Layout;
