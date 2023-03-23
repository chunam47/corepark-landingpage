import React from 'react';

const SecurityContainer = () => {
  return (
    <>
      <div className="security-container">
        <div className="security-container__bg"></div>
        <div className="flex items-center justify-center flex-col">
          <div className="security-container__title">security</div>
          <span className="security-container__desc">
            Trade with confidence on the secure Dex platform.
          </span>
        </div>
        <div className="security-container__box">
          <div>box1</div>
          <div>box2</div>
          <div>box3</div>
        </div>
      </div>
    </>
  );
};
export default SecurityContainer;
