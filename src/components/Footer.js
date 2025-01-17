import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="footer-bg">
          <div className="container">
            <div className="row">
              <div className="mb-2 col-md-12">
                <br />
                <span className="copyright">
                  Copyright © 2022 AppleMart Inc. All rights reserved.
                </span>

                <span className="copyright">| Privacy Policy</span>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
