import Layout from '@layouts';
import React from 'react';
import FeaturesContainer from '../Container/FeaturesContainer';
import HomeContainer from '../Container/HomeContainer';
import SecurityContainer from '../Container/SecurityContainer';
import TokenomicContainer from '../Container/TokenomicContainer';

const HomePage = () => {
  return (
    <>
      <Layout title="Corepark" description=""></Layout>
      <HomeContainer />
      <FeaturesContainer />
      <SecurityContainer />
      <TokenomicContainer />
    </>
  );
};

export default HomePage;
