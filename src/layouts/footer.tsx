import React from 'react';
import logo from '@assets/images/logo.png';
export default function Footer() {
  return (
    <div className="footer">
      <div className="max-width-1276">
        <div className="content-footer">
          <div>
            <img src={logo.src} alt="" />
            <span className="copyright">
              Copyright © 2023 by Rubik. All rights reserved.
            </span>
          </div>
          <div className="menu-footer">
            <div className="title-footer">COMMUNITY</div>
            <span>Discord</span>
            <span>Twitter</span>
            <span>Telegram</span>
          </div>
          <div className="menu-footer">
            <div className="title-footer">DOCUMENTATION</div>
            <span>Gitbook</span>
            <span>Whitepaper</span>
          </div>
        </div>
      </div>
    </div>
  );
}
