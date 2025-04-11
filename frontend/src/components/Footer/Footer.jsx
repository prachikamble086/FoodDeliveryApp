import OrderLogo from "../OrderLogo/OrderLogo";
import { appStore, googlePlay, PlayStoreBadges } from "../../constant";
import { Instagram } from "../../constant";
import { Snapchat } from "../../constant";
import { Facebook } from "../../constant";
import { TikTok as TikTok } from "../../constant";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-and-links">
        <div className="links-on-signin-page">
          <div className="order-logo-playstore">
            <OrderLogo variant="black" className="footer-order-logo" />
            {/* <img src={PlayStoreBadges} alt="" className="play-store-badges" /> */}
            <div className="play-store-badges">
              <img
                src={googlePlay}
                alt="googlePlay"
                className="googlePlay-image-footer"
              />
              <img
                src={appStore}
                alt="appStore"
                className="appStore-image-footer"
              />
            </div>
            <p className="address-logo">
              Company # 490039-445, Registered with House of companies
            </p>
          </div>
          <div className="subscribe-section">
            <p className="subscribe-section-title">
              Get Exclusive Deals in your Inbox
            </p>
            <div className="subscribe-email-button">
              <input
                type="text"
                placeholder="youremail@gmail.com"
                className="subscribe-email"
              />
              <button className="subscribe-button-email">Subscribe</button>
            </div>
            <p>we wont spam, read our email policy</p>
            <div className="social-media-icons">
              <img src={Instagram} alt="" />
              <img src={Snapchat} alt="" />
              <img src={Facebook} alt="" />
              <img src={TikTok} alt="" />
            </div>
          </div>
          <div className="legal-page">
            <div className="legal-page-header">Legal Pages</div>
            <div className="legal-page-info">Terms and conditions</div>
            <div className="legal-page-info">Privacy</div>
            <div className="legal-page-info">Cookies</div>
            <div className="legal-page-info">Modern Slavery Statement</div>
          </div>
          <div className="important-links">
            <div className="important-links-header">Important Links</div>
            <div className="important-link-info">Get help</div>
            <div className="important-link-info">Add your restaurant</div>
            <div className="important-link-info">Sign up to deliver</div>
            <div className="important-link-info">Create a business account</div>
          </div>
        </div>
        <div className="signin-footer">
          <p>Order.uk Copyright 2024, All Rights Reserved.</p>
          <div className="privacy-policy">
            <div>Privacy Policy</div>
            <div>Terms</div>
            <div>Pricing</div>
            <div>Do not sell or share my personal information</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
