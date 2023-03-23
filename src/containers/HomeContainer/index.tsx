import React from 'react';
import imgCenter from '@assets/images/img4.png';
import button1 from '@assets/images/button1.png';
import button2 from '@assets/images/button2.png';
import Button from '../../Components/Button';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <div className="max-width-1276">
        <div className="title">
          <h1>Swap, earn and build </h1>
          <p>on top of Coredao decentralized cryptocurrency trading protocol.</p>
        </div>
        <div className="flex justify-center items-center button-home-page">
          <Button
            text="Public Sale"
            src={button1}
            textColor="#f0f7f8"
            className="mr-8"
          />
          <Button text="Launch Application" src={button2} textColor="#00E799" />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
