import React from "react";
import './playrecord.css';
import edit from '../../images/edit.png';
import facebook from '../../images/facebook.png';
import whatsapp from '../../images/Vector.png';
import telegram from '../../images/Group.png';
import Header from "../header/Header";
import Footer from '../footer/Footer';


const PlayRecord = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('Url');

  return (
    <div className="video-page">
        <Header />
        <div className="get-started-main">
            <div className="left-content">
                <div className="video-header">
                    <p className="video-ready">Your video is ready!</p>
                </div>
                <div className="video-header-content">
                    <div>
                        <p>Name</p>
                        <div className="video-title">
                            <span className="video-name">Untitled_Video_20232509 </span>
                            <span className="edit"><img src={edit} alt="edit" /></span>
                        </div>
                    </div>
                    <div className="email-input">
                        <input type="email" placeholder="enter email address" />
                        <button className="email-button">Send</button>
                    </div>
                    <div className="video-url-container">
                        <span className="video-url-header">Video Url</span>
                        <div className="video-url">
                            <span>https://www.helpmeout/Untitled_Video_20232509</span>
                            <button className="video-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M4.66699 12.4998H3.83366C3.39163 12.4998 2.96771 12.3242 2.65515 12.0117C2.34259 11.6991 2.16699 11.2752 2.16699 10.8332V3.33317C2.16699 2.89114 2.34259 2.46722 2.65515 2.15466C2.96771 1.8421 3.39163 1.6665 3.83366 1.6665H11.3337C11.7757 1.6665 12.1996 1.8421 12.5122 2.15466C12.8247 2.46722 13.0003 2.89114 13.0003 3.33317V4.1665M9.66699 7.49984H17.167C18.0875 7.49984 18.8337 8.24603 18.8337 9.1665V16.6665C18.8337 17.587 18.0875 18.3332 17.167 18.3332H9.66699C8.74652 18.3332 8.00033 17.587 8.00033 16.6665V9.1665C8.00033 8.24603 8.74652 7.49984 9.66699 7.49984Z" stroke="#120B48" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>
                    <div className="share-video">
                        <span>Share your video </span>
                        <div className="social-links">
                            <div className="social-link">
                                <img src={facebook} alt="facebook" />
                                <span>Facebook</span>
                            </div>
                            <div className="social-link">
                                <img src={whatsapp} alt="WhatsApp" />
                                <span>WhatsApp</span>
                            </div>
                            <div className="social-link">
                                <img src={telegram} alt="Telegram" />
                                <span>Telegram</span>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="divider"></div>
            <div className="right-content">
                <div className="video-card">
                        <video controls width="550" height="400" className="video">
                           <source src={videoUrl} type="video/mp4" />
                           Your browser does not support the video tag.
                        </video>
                </div>
                <div className="transcript-container">
                    <div className="transcript-box">
                        <span>Transcript</span>
                        <input type="options" />
                    </div>
                    <div className="transcription-text">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>

        <div className="save-video">
            <div className="save-video-box">
                <span className="save-video-header">
                To ensure the availability and privacy of your video, we recommend saving it to your account.
                </span>
                <button><span>Save Video</span></button>
                <p>Don’t have an account?
                    <span className="create-account"> Create account</span>
                </p>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default PlayRecord;
