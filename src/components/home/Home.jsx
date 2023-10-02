import React from "react";
import "./home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import rightarrow from "../../images/arrow-right.png";
import Img1 from "../../images/AdobeStock1.png";
import Img2 from "../../images/AdobeStock_man.png";
import Img3 from "../../images/woman-2.png";
import dot2 from "../../images/dot-grid-2.png";
import dot1 from "../../images/dot-grid-1.png";
import recordIcon from "../../images/record.png";
import shareIcon from "../../images/easy-share.png";
import revisitIcon from "../../images/revisit.png";
import screenshot from "../../images/Video Repository.png";
import recPreview from "../../images/rec-preview.svg.png";

const Home = () => {
  return (
    <div className="main">
      <Header />

      <div className="hero-section">
        <div className="herotext">
          <div className="toptext">
            <h1>Show Them Don't Just Tell</h1>
            <p>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
          </div>
          
          <button className="install-button">
            Install HelpMeOut
            <img src={rightarrow} alt="rightarrow" />
          </button>
        </div>

        <div className="photos-container">
          <div className="dots">
            <img src={dot1} alt="" className="dot1" />
            <img src={dot2} alt="" className="dot2" />
          </div>

          <div className="heroimage">
            <img className="img1" src={Img1} alt="" />
            <img className="img2" src={Img3} alt="" />
            <img className="img3" src={Img2} alt="" />
          </div>
        </div>

      </div>


      <div className="features">
        <div className="feature-head">
          <h2>Features</h2>
          <p>Key Highlights of Our Extension</p>
        </div>

        <div className="feature-body">
          <div className="feat-items">
            <div className="feature">
              <img src={recordIcon} alt="record icon" />
              <div className="feature-desc">
                <h3>Simple Screen Recording</h3>
                <p>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="feature">
              <img src={shareIcon} alt="record icon" />
              <div className="feature-desc">
                <h3>Easy-to-Share URL</h3>
                <p>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="feature">
              <img src={revisitIcon} alt="record icon" />
              <div className="feature-desc">
                <h3>Revisit Recordings</h3>
                <p>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>

          <div className="screeshot">
            <img src={screenshot} alt="" />
          </div>
        </div>
      </div>

      
      <div className="how-it-works">
        <div className="how-it-works-header">
          <h2> How it works</h2>
        </div>

        <div className="how-it-works-body">
          <div className="how-it-works-content">
          <div className="how-it-works-num">
              <span>1</span>
            </div>
            <h3>Record Screen</h3>
            <p>
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src={recPreview} alt="" />
          </div>
          <div className="how-it-works-content">
          <div className="how-it-works-num">
              <span>2</span>
            </div>
            <h3>Share Your Recording </h3>
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={recPreview} alt="" />
          </div>
          <div className="how-it-works-content">
            <div className="how-it-works-num">
              <span>3</span>
            </div>
            <h3>Learn Effortlessly</h3>
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={recPreview} alt="" />
          </div>
        </div>
      </div>

      <Footer />    
          
    </div>
  );
};

export default Home;
