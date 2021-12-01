import React from 'react'
import twitter from './svg/twitter.svg';
import apple from './svg/apple.svg';
import google from './svg/google.svg';
import facebook from './svg/facebook.svg';
import linkedin from './svg/linkedin.svg';
import instagram from './svg/instagram.svg';

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="footer-download">
          <ul>
            <span>Get the mobile app</span>
            <li>
              <a href="https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8">
                <img src={apple} alt="apple-logo" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.welltory.client.android">
                <img src={google} alt="google-logo" />

              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <nav className="footer-terms">
            <a href="https://welltory.com/terms/">Terms of use</a>
            <a href="https://welltory.com/privacy/">Privacy policy</a>
          </nav>
          <ul>
            <li>
              <a href="https://twitter.com/welltory">
                <img src={twitter} alt="twitter-logo" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/welltory">
                <img src={facebook} alt="facebook-logo" />

              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/welltory/">
                <img src={instagram} alt="instagram-logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/welltory">
                <img src={linkedin} alt="linkedin-logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
