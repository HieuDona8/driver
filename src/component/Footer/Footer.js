import React, { Component } from 'react';
import './Footer.css'
import imgFooter from './../../assets/logo-footer.png'
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-mobile">
          <div className="main-footer">
            <div className="social-icon">
              <a className="facebook" href="true">
                <svg className="IconSocialMediaFacebook__root__3iPOx" width={10} height={17} viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg"><path d="M8.65 1.108C8.413 1.072 7.59 1 6.633 1c-2 0-3.374 1.244-3.374 3.525V6.49H1v2.668h2.258v6.84h2.71V9.16h2.25l.345-2.668H5.968V4.786c0-.766.204-1.298 1.293-1.298h1.39v-2.38z" fillRule="evenodd" /></svg>
              </a>
              <a className="twitter" href="true">
                <svg className="IconSocialMediaTwitter__root__38V5t" width={16} height={14} viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path d="M14.956 2.37c-.513.225-1.07.388-1.647.45.592-.36 1.044-.928 1.257-1.604-.55.334-1.17.577-1.816.703-.52-.568-1.265-.92-2.09-.92C9.077 1 7.8 2.307 7.8 3.912c0 .225.028.45.072.667C5.5 4.45 3.382 3.3 1.974 1.53c-.248.433-.39.928-.39 1.47 0 1.01.505 1.9 1.276 2.424-.47-.018-.912-.153-1.293-.37v.036c0 1.416.983 2.587 2.293 2.858-.24.063-.496.1-.752.1-.186 0-.363-.02-.54-.046.362 1.154 1.416 1.992 2.674 2.02-.983.783-2.214 1.243-3.55 1.243-.24 0-.462-.01-.692-.036 1.266.83 2.772 1.308 4.392 1.308 5.26 0 8.138-4.435 8.138-8.284 0-.126 0-.252-.008-.38.557-.413 1.045-.927 1.434-1.504z" fillRule="evenodd" /></svg>
              </a>
              <a className="instagram" href="true">
                <svg className="IconSocialMediaInstagram__root__3VbTs" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
            <div className="contact">
              <div className="link-one">
                <ul className="menu-item">
                  <li>
                    <a href="true">List your car</a>
                  </li>
                  <li>
                    <a href="true">About us</a>
                  </li>
                  <li>
                    <a href="true">Policies</a>
                  </li>
                  <li>
                    <a href="true">F.A.Q</a>
                  </li>
                  <li>
                    <a href="true">Help</a>
                  </li>
                  <li>
                    <a href="true">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="link-two">
                <ul className="menu-item">
                  <li>
                    <a href="true">How it works</a>
                  </li>
                  <li>
                    <a href="true">Share your car</a>
                  </li>
                  <li>
                    <a href="true">Rent a car</a>
                  </li>
                  <li>
                    <a href="true">Trust &amp; Safety</a>
                  </li>
                </ul>
              </div>
            </div>
          
          </div>
          <div className="footer-info">
            <a href="true">
              <span>© Drive lah 2019</span>
            </a>
            <div>
              <a className="footer-sepecial" href="true">
                <span>Rental Agreement</span>
              </a>
              <a href="true">
                <span>Terms</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-desktop">
          <div className="info-desktop">
            <a className="info-logo" href="true">
              <img src={imgFooter} alt="" />
            </a>
            <p className="info-text">
              The largest online community to rent Cars in Singapore.
            </p>
            <div className="info-link">
              <a href="true">© Drive lah 2019</a>
            </div>
          </div>
          <div className="space">
            &nbsp;
          </div>
          <div className="link-item">
            <ul className="menu-item">
              <li>
                <a href="true">List your car</a>
              </li>
              <li>
                <a href="true">About us</a>
              </li>
              <li>
                <a href="true">Policies</a>
              </li>
              <li>
                <a href="true">F.A.Q</a>
              </li>
              <li>
                <a href="true">Help</a>
              </li>
              <li>
                <a href="true">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="link-item">
            <ul className="menu-item">
              <li>
                <a href="true">How it works</a>
              </li>
              <li>
                <a href="true">Share your car</a>
              </li>
              <li>
                <a href="true">Rent a car</a>
              </li>
              <li>
                <a href="true">Trust &amp; Safety</a>
              </li>
            </ul>
          </div>
          <div className="social-desktop">
            <div className="social-icon">
              <a className="facebook" href="true">
                <svg className="IconSocialMediaFacebook__root__3iPOx" width={10} height={17} viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg"><path d="M8.65 1.108C8.413 1.072 7.59 1 6.633 1c-2 0-3.374 1.244-3.374 3.525V6.49H1v2.668h2.258v6.84h2.71V9.16h2.25l.345-2.668H5.968V4.786c0-.766.204-1.298 1.293-1.298h1.39v-2.38z" fillRule="evenodd" /></svg>
              </a>
              <a className="twitter" href="true">
                <svg className="IconSocialMediaTwitter__root__38V5t" width={16} height={14} viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path d="M14.956 2.37c-.513.225-1.07.388-1.647.45.592-.36 1.044-.928 1.257-1.604-.55.334-1.17.577-1.816.703-.52-.568-1.265-.92-2.09-.92C9.077 1 7.8 2.307 7.8 3.912c0 .225.028.45.072.667C5.5 4.45 3.382 3.3 1.974 1.53c-.248.433-.39.928-.39 1.47 0 1.01.505 1.9 1.276 2.424-.47-.018-.912-.153-1.293-.37v.036c0 1.416.983 2.587 2.293 2.858-.24.063-.496.1-.752.1-.186 0-.363-.02-.54-.046.362 1.154 1.416 1.992 2.674 2.02-.983.783-2.214 1.243-3.55 1.243-.24 0-.462-.01-.692-.036 1.266.83 2.772 1.308 4.392 1.308 5.26 0 8.138-4.435 8.138-8.284 0-.126 0-.252-.008-.38.557-.413 1.045-.927 1.434-1.504z" fillRule="evenodd" /></svg>
              </a>
              <a className="instagram" href="true">
                <svg className="IconSocialMediaInstagram__root__3VbTs" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
            <div>
              <ul className="social-text">
                <li>
                  <a href="true">Terms of Service</a>
                </li>
                <li>
                  <a href="true">Rental Agreement</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;