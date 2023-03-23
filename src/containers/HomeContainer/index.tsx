import React from 'react';
import styled from 'styled-components';
import chart1 from '@assets/images/img1.png';
import chart2 from '@assets/images/img2.png';
import chart3 from '@assets/images/img3.png';
import chart4 from '@assets/images/img5.png';
import chart5 from '@assets/images/img6.png';
import chart6 from '@assets/images/img7.png';
import chart7 from '@assets/images/img8.png';
import chart8 from '@assets/images/img9.png';
import chart9 from '@assets/images/img10.png';
import imgCenter from '@assets/images/img4.png';
import Button from '../../components/Button';
import button1 from '@assets/images/button1.png';
import button2 from '@assets/images/button2.png';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h1>Swap, earn and build </h1>
        <p>on top of Coredao decentralized cryptocurrency trading protocol.</p>
      </div>
      <div className="flex justify-center items-center">
        <Button
          text="Public Sale"
          src={button1}
          textColor="#f0f7f8"
          className="mr-8"
        />
        <Button text="Launch Application" src={button2} textColor="#00E799" />
        {/* <button className="button-public">Public Sale</button>
        <button className="button-launch">
          <span>Launch Application</span>
        </button> */}
      </div>
    </div>
  );
};

export default HomeContainer;
