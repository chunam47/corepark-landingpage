import Layout from '@layouts';
import React from 'react';
import HomeContainer from '../containers/HomeContainer';

const HomePage = () => {
  return (
    <Layout
      title="Metanode | IoT chain platform is The world's first Layer 0 Blockchain on mobile"
      description="Metanode running on IoT chain platform is The world's first - Layer 0 Blockchain on mobile which enables to mine crypto on mobile devices. We store and process transactions, execute smart contracts and deploy D-Apps on billions of mobile devices of users worldwide. Users now can mine coins, and deploy their smart contracts and decentralized applications right on their mobile devices.">
      <HomeContainer />
    </Layout>
  );
};

export default HomePage;
