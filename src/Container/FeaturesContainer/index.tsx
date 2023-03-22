import React from 'react';
import hexa from '@assets/images/features/hexa.png';
import imgFeatures from '@assets/images/features.png';

const FeaturesContainer = () => {
  return (
    <>
      <div className="features-container">
        <div className="py-16 features-container-root relative">
          <div className="flex flex-col">
            <div className="features-container__title">Corepark Features</div>
            <span className="features-container__desc">
              Corepark Exchange is a decentralized exchange with powerful features
              for trading and earning cryptocurrency, including swaps, staking, yield
              farming, and affiliate programs. It's a must-have platform for anyone
              looking to participate in the future of decentralized finance.
            </span>
            <button className="features-container__button px-6 py-3">
              Check out our features
            </button>
            <img className="features-container__img" src={hexa.src} alt="" />
          </div>
          <div className="features-container__left">
            <img
              className="features-container__left--img"
              src={imgFeatures.src}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesContainer;
