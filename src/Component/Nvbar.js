import React from 'react';
import '../Css/Navbar.css';
import ScrollToTop from 'react-scroll-up';
import Scroll from '../img/icons8-up-squared-50.png';
import NavbarFilm from '../img/dailymovie.mp4';
import logo from '../img/dailyscribeyellow.png';


const Nvbar = (props) => {

  
  return (
    <div id="Navbar">
             <video src={NavbarFilm} muted loop autoPlay />
      <div className="Shadow">
        <div className="Header">
          <a href="http://dailyscribe.ir/">
            <div className="NavbarLogo">
              <img src={logo} alt="logo"/>
            </div>
          </a>

          <div className="NavbarInfo">
            <ul>
              <li onClick={(e) => props.scrollToMap(5)}>تماس با ما</li>
              <li onClick={(e) => props.ScrollerAbout(4)}>درباره ما</li>
              <li onClick={(e) => props.scrollToActive(3)}>گالری تصاویر</li>
              {/* <li onClick={(e) => props.scrollToChart(2)}>چارت کاری</li> */}
              <li
                className="animated-button"
                onClick={(e) => props.scrollToEmployer(1)}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                فراخوان استخدام
                <div className="exclamation">
                  {/* <img src={Logo} alt="exp"></img> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="information">
          <h1>
            <a href="http://dailyscribe.ir/">
              <span id="primery">DailyScribe</span>
            </a>
            Team{' '}
          </h1>
          <p>Work Hard In Silence , Let Your Success Make The Noise</p>
          <button onClick={(e) => props.ScrollerAbout(4)} >About</button>
        </div>
      </div>
      <ScrollToTop showUnder={160}>
        <span className='handelimg'>
          <img className="imghand" src={Scroll} alt="scrol"></img>
        </span>
      </ScrollToTop>
    </div>
  );
};

export default Nvbar;
