import React from 'react';
import partner from '@assets/images/partner.png';

const PartnerContainer = () => {
  return (
    <div className="root-partner">
      <div className="max-width-1276">
        <div className="partner-container flex flex-col">
          <div className="corepark-title">Partner</div>
          <img src={partner.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnerContainer;
