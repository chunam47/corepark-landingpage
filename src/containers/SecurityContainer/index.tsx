import React from 'react';
import img from '@assets/images/security.png';

const SecurityContainer = () => {
  const data = [
    {
      id: 1,
      title: 'Smart contract security',
      decs: 'This includes writing clear and concise code, adhering to established standards, and implementing secure coding patterns',
    },
    {
      id: 2,
      title: 'Internal security audit',
      decs: 'The list of all protocol secret Using 2FA and secure master passwords hub. Access to smart contracts. Access to multisig wallets. Ownership and access to keys. Secure sharing of critical info',
    },
    {
      id: 1,
      title: 'Bug Bounty Program',
      decs: 'Join our bug bounty program and help make Dex even more secure! Earn rewards for identifying and reporting vulnerabilities.',
    },
  ];
  return (
    <>
      <div className="security-container">
        <div className="max-width-1276">
          <div className="security-container__bg"></div>
          <div className="flex items-center justify-center flex-col">
            <div className="security-container__title">security</div>
            <span className="security-container__desc">
              Trade with confidence on the secure Dex platform.
            </span>
          </div>
          <div className="security-container__box">
            {data.map((item, index) => (
              <div className="relative" key={index}>
                <img src={img.src} alt="" />
                <div className="security-container__box--title">{item.title}</div>
                <div className="security-container__box--decs">{item.decs}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SecurityContainer;
