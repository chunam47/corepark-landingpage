import React, { useEffect, useState } from 'react';
import logo from '@assets/images/logo.png';
import button from '@assets/images/button1.png';
import Button from '../Components/Button';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import { Drawer } from 'antd';

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
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (v: any) => {
    setActive(v);
  };

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  return (
    <React.Fragment>
      <div className={`header-corepark ${scrollTop > 75 ? 'backgound-header' : ''}`}>
        <div className="max-width-1276 content-header">
          <img className="logo-corepark" src={logo.src} alt="" />
          <div>
            <div className="menu-container">
              <Menu className="menu">
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="features">Features</Menu.Item>
                <Menu.Item key="partner">Partner</Menu.Item>
                <Menu.Item key="tokenomic">Tokenomic</Menu.Item>
                <Menu.Item key="aonnect-wallet">
                  <Button src={button} text="Connect Wallet" textColor="f0f7f8" />
                </Menu.Item>
              </Menu>
            </div>
            <div className="menuButton" onClick={showDrawer}>
              <MenuOutlined color="#fff" />
            </div>
            <Drawer
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}>
              <Menu>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="features">Features</Menu.Item>
                <Menu.Item key="partner">Partner</Menu.Item>
                <Menu.Item key="tokenomic">Tokenomic</Menu.Item>
                <Menu.Item key="aonnect-wallet">
                  <Button src={button} text="Connect Wallet" textColor="f0f7f8" />
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
