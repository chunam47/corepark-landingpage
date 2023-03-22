import React, { useState } from 'react';
import logo from '@assets/images/logo.png';

export default function Header() {
  const dataMenu = [
    {
      title: 'About',
      onclick: '#about',
    },
    {
      title: 'Features',
      onclick: '#features',
    },
    {
      title: 'Partner',
      onclick: '#partner',
    },
    {
      title: 'Tokenomic',
      onclick: '#tokenomic',
    },
    {
      title: 'Roadmap',
      onclick: '#roadmap',
    },
  ];
  const [active, setActive] = useState<any>(dataMenu[0]);

  const handleClick = (v: any) => {
    console.log(v);

    setActive(v);
  };

  console.log({ active });

  return (
    <React.Fragment>
      <div className="header-corepark">
        <img src={logo.src} alt="" />
        <div className="menu">
          {dataMenu.map((item, index) => (
            <div onClick={() => handleClick(item)} key={index}>
              <a
                className={`menu-item ${active === item ? 'active' : ''}`}
                href={item.onclick}>
                {item.title}
              </a>
            </div>
          ))}
          <a className="connect-wallet" href="">
            Connect Wallet
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
