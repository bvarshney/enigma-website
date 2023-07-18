import React from "react";
import Image from "next/image";

export default function FooterMobile() {
  return (
    <div>
      <div className="contact mobile-footer">
        <div className="contact-content">
          <div className="contact-content-heading">
            Let's bring your
            <br />
            <span className="contact-content-heading-sub">
              &nbsp;ideas to life!
            </span>
          </div>
          <div className="contact-content-mail">
            <div className="contact-content-mail-title">mail us at</div>
            <div className="contact-content-mail-desc">
              <a href="mailto:hi@weareenigma.com">hi@weareenigma.com</a>
              <div className="contact-content-mail-desc-underline" />
            </div>
          </div>
          <div className="contact-content-call">
            <div className="contact-content-call-title">
              even better call us
            </div>
            <div className="contact-content-call-desc">
              <a href="tel:+91 8178 026 136" style={{ letterSpacing: "1.3px" }}>
                <span className="half-opacity font-regular">+91</span> 8178 026
                136
              </a>
            </div>
            <div className="contact-content-call-desc">
              <a href="tel:+91 7303 644 520">
                <span className="half-opacity font-regular">+91</span> 7303 644
                520
              </a>
            </div>
          </div>
          <div className="contact-content-socials">
            <div className="contact-content-socials-row">
              <div className="contact-content-socials-icon">
                <span>Facebook</span>
              </div>
              <div className="contact-content-socials-icon">
                <span>Instagram</span>
              </div>
              <div className="contact-content-socials-icon">
                <span>Youtube</span>
              </div>
            </div>
            <div className="contact-content-socials-row">
              <div className="contact-content-socials-icon">
                <span>LinkedIn</span>
              </div>
              <div className="contact-content-socials-icon">
                <span>Twitter</span>
              </div>
              <div className="contact-content-socials-icon">
                <span>Behance</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-mobile">
            {/* <div className="footer-row">
              <div className="footer-location">
                <div className="footer-top">Location</div>
                <div className="footer-bottom">Noida - India</div>
              </div>
              <div className="footer-time">
                <div className="footer-top">timezone</div>
                <div className="footer-bottom">+5:30 GMT</div>
              </div>
            </div> */}
            <div className="footer-hr" />
            <div className="footer-copyright">
              <div className="footer-copyright-label">
                © 2023 Enigma Digital Consulting, LLP. All Rights Reserved. All
                Wrongs Reversed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
