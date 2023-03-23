import Layout from '@layouts';
import React from 'react';
import FeaturesContainer from '../containers/FeaturesContainer';
import HomeContainer from '../containers/HomeContainer';
import PartnerContainer from '../containers/PartnerContainer';
import RoadmapContainer from '../containers/RoadmapContainer';
import SecurityContainer from '../containers/SecurityContainer';
import TokenomicContainer from '../containers/TokenomicContainer';

const HomePage = () => {
  return (
    <>
      <Layout title="Corepark" description="">
        <div className="bg-body"></div>
        <HomeContainer />
        <FeaturesContainer />
        <SecurityContainer />
        <TokenomicContainer />
        <PartnerContainer />
        <RoadmapContainer />
      </Layout>
    </>
  );
};

export default HomePage;
