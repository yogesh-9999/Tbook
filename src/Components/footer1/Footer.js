import React from "react";
import "./Footer.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <div className="anc">about us</div>
                </li>
                <li>
                  <div className="anc">our services</div>
                </li>
                <li>
                  <div className="anc">privacy policy</div>
                </li>
                <li>
                  <div className="anc">affiliate program</div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <div className="anc">FAQ</div>
                </li>

                <li>
                  <div className="anc">Booking</div>
                </li>

                <li>
                  <div className="anc">payment options</div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hotel Location</h4>
              <ul>
                <li>
                  <div className="anc">Hotel Near Me </div>
                </li>
                <li>
                  <div className="anc">Hotel in Agra</div>
                </li>
                <li>
                  <div className="anc">Hotel in Goa</div>
                </li>
                <li>
                  <div className="anc">Hotel in Puri</div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <div className="anc1">
                  <FcGoogle />
                </div>
                <div className="anc1">
                  <BsFacebook />
                </div>
                <div className="anc1">
                  <BsInstagram />
                </div>
                <div className="anc1">
                  <BsTwitter/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
