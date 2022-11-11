import React from "react";
import "./Footer.css";

import Dropdown from "../DropdownMenu/Dropdown";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <div>
          <h2>HELP & INFORMATION</h2>
          <p>Help</p>
          <p>Track order</p>
          <p>Delivery & returns</p>
          <p>Sitemap</p>
        </div>
        <div>
          <h2>ABOUT ASOS</h2>
          <p>About us</p>
          <p>Careers at ASOS</p>
          <p>Corporate responsibility</p>
          <p>Investors' site</p>
        </div>
        <div>
          <h2>MORE FROM ASOS</h2>
          <p>Mobile and ASOS apps</p>
          <p>ASOS Marketplace</p>
          <p>Gift vouchers</p>
          <p>Black Friday</p>
          <p>ASOS y Thrift</p>
        </div>
        <div>
          <h2>SHOPPING FROM:</h2>
          <div className="select-country">
            <span className="select">You are in </span>
            <Dropdown />
          </div>
        </div>
      </div>
      <div>
        <div>@ 2022 ASOS</div>
        <div>Privacy & cookies | Ts&Cs | Accessibility</div>
      </div>
    </div>
  );
};

export default Footer;
