import React from 'react';
import imgTokenomic from '@assets/images/img-tokenomic.png';
import imgBottom from '@assets/images/img-tokenomic-2.png';
import imgData from '@assets/images/img2.png';
const TokenomicContainer = () => {
  const dataTable = [
    {
      title: 'Public Sale',
      percent: '12%',
      total: '25.200.000',
    },
    {
      title: 'Private Sale',
      percent: '3%',
      total: '6.300.000',
    },
    {
      title: 'Liquidity',
      percent: '10%',
      total: '21.000.000',
    },
    {
      title: 'Farming Rewards',
      percent: '49%',
      total: '102.900.000',
    },
    {
      title: 'Staking Rewards',
      percent: '15%',
      total: '31.500.000',
    },
    {
      title: 'Marketing',
      percent: '5%',
      total: '10.500.000',
    },
    {
      title: 'Development',
      percent: '5%',
      total: '10.500.000',
    },
    {
      title: 'Airdrop',
      percent: '1%',
      total: '2.100.000',
    },
  ];
  return (
    <>
      <div className="tokenomic-container">
        <div className="max-width-1276">
          <div className="flex flex-col items-center justify-center">
            <div className="corepark-title">Tokenomic</div>
            <span className="corepark-decs">
              <b>$CPE</b> is the native token of the Corepark Exchange, limited to{' '}
              {''}
              <b>210.000.000</b> total supply.
              <br /> Future token burns will only ever reduce this amount.
              <br /> <b>$CPE</b> is the revenue and rewards earning token when
              staked.
            </span>
          </div>
          <div className="flex justify-center pt-16 gap-20 tokenomic-container__content">
            <div className="w-full tokenomic-container__content--img">
              <img width="100%" src={imgTokenomic.src} alt="" />
            </div>
            <div className="w-full flex flex-col tokenomic-container__right ">
              <div className="flex justify-end">
                <img src={imgData.src} alt="" />
              </div>
              <div className="tokenomic-container__table mt-5 mb-10">
                {dataTable.map((item, index) => (
                  <div key={index} className="tokenomic-container__table--item">
                    <span>{item.title}</span>
                    <span>{item.percent}</span>
                    <span>{item.total}</span>
                  </div>
                ))}
                <div className="total-supply">Total Supply: 210.000.000</div>
              </div>
              <div className="flex justify-end">
                <img src={imgBottom.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TokenomicContainer;
