import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';

function login() {
    return (
      <div>
        <header className="login-header">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clipPath="url(#clip0_577_957)">
                    <path d="M31.6401 16.8421C31.0804 14.9122 30.0621 13.1464 28.6721 11.6953C27.2821 10.2442 25.5617 9.15092 23.6577 8.50876C21.7766 7.96121 19.7993 7.82666 17.8614 8.11432C15.9234 8.40199 14.0705 9.10507 12.4296 10.1754C12.2946 10.3107 12.1252 10.4067 11.9398 10.4531C11.7544 10.4994 11.5598 10.4944 11.377 10.4386C11.0084 10.3192 10.6763 10.1079 10.4121 9.82455C10.2197 9.47744 10.1575 9.07308 10.2366 8.68419C10.2869 8.49754 10.3751 8.32327 10.4959 8.17233C10.6167 8.02138 10.7673 7.89701 10.9384 7.807C15.5875 5.0877 20.1489 4.38595 24.5349 5.78946C26.6942 6.50768 28.6656 7.69964 30.3047 9.27811C31.9439 10.8566 33.2094 12.7816 34.0085 14.9123H39.8857C38.684 10.1719 35.7871 6.0361 31.7427 3.28683C27.6983 0.537565 22.7868 -0.634627 17.9368 -0.00811872C13.0868 0.618389 8.63434 3.00017 5.42135 6.68692C2.20837 10.3737 0.457493 15.1098 0.499772 20C0.499772 20.7895 0.587491 21.4912 0.587491 22.2807H8.04363C8.32839 22.2645 8.61069 22.3414 8.84801 22.4996C9.08532 22.6578 9.26481 22.8888 9.35942 23.1579C9.93235 25.0811 10.9553 26.8402 12.3434 28.2894C13.7316 29.7385 15.445 30.8361 17.3419 31.4912C19.223 32.0388 21.2002 32.1733 23.1382 31.8856C25.0761 31.598 26.929 30.8949 28.5699 29.8245C28.705 29.6892 28.8743 29.5933 29.0597 29.5469C29.2452 29.5005 29.4398 29.5055 29.6226 29.5614C29.9911 29.6808 30.3232 29.8921 30.5875 30.1754C30.7799 30.5225 30.8421 30.9269 30.7629 31.3158C30.7127 31.5024 30.6244 31.6767 30.5036 31.8276C30.3829 31.9786 30.2323 32.103 30.0612 32.193C27.417 33.9722 24.3008 34.9192 21.1138 34.9123C19.5386 34.9004 17.9732 34.6641 16.4647 34.2105C14.2963 33.5094 12.3162 32.3235 10.6747 30.7428C9.03315 29.162 7.77338 27.2281 6.991 25.0877H1.20153C2.46964 29.7501 5.38277 33.7958 9.40243 36.477C13.4221 39.1582 18.2765 40.2935 23.0683 39.6731C27.8601 39.0527 32.2653 36.7186 35.4696 33.1022C38.674 29.4858 40.4608 24.8316 40.4998 20C40.5161 19.2679 40.4868 18.5355 40.4121 17.807H33.0436C32.7445 17.7872 32.4563 17.6872 32.2093 17.5174C31.9623 17.3476 31.7657 17.1143 31.6401 16.8421Z" fill="#100A42"/>
                    <path d="M20.5841 28.7496C22.311 28.733 23.9944 28.2057 25.4222 27.2342C26.8501 26.2627 27.9585 24.8904 28.6078 23.2902C29.2572 21.6899 29.4185 19.9333 29.0715 18.2416C28.7244 16.5498 27.8845 14.9986 26.6575 13.7833C25.4305 12.568 23.8713 11.7429 22.1763 11.4121C20.4813 11.0812 18.7263 11.2593 17.1324 11.924C15.5384 12.5887 14.1768 13.7102 13.219 15.1472C12.2612 16.5843 11.7501 18.2726 11.75 19.9996C11.7499 21.1558 11.979 22.3005 12.424 23.3676C12.869 24.4347 13.521 25.4031 14.3425 26.2167C15.1639 27.0303 16.1385 27.6731 17.2098 28.1078C18.2811 28.5426 19.428 28.7607 20.5841 28.7496Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_577_957">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                </defs>
            </svg>
            <span>HelpMeOut</span>
          </div>
        </header>

        <div className="form-container">
          <div className='form-container-main'>
            <h2>Log in or Sign up</h2>
            <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
          </div>

          <form action="#">
            <div className="signup-button-box">
              <div className="signup-button">
                <img src={google} alt="google logo" />
                <p>Continue with Google</p>
              </div>
            </div>

            <div className="signup-button-box">
              <div className="signup-button">
                <img src={facebook} alt="facebook logo" />
                <p>Continue with Facebook</p>
              </div>
            </div>

            <div className='signup-button-divider'>
              <div className="signup-button-divider-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="201" height="1" viewBox="0 0 201 1" fill="none">
                  <path d="M0.5 0.5L200.5 0.500017" stroke="#B9C2C8" stroke-linecap="round"/>
                </svg>
              </div>
              <div className="signup-button-divider-or">
                <p>or</p>
              </div> 
              <div className="signup-button-divider-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="201" height="1" viewBox="0 0 201 1" fill="none">
                  <path d="M0.5 0.5L200.5 0.500017" stroke="#B9C2C8" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <div className="signup-input-container">
              <div className="signup-input-field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email address" />
              </div>

              <div className="signup-input-field">
                <label>Password</label>
                <input type="password" placeholder="Enter your Password" />
              </div>
            </div>
            

            <Link to={"/videos"} className='signup-submit'>
              <div className="signup-submit-container">
                <div className='signup-submit-button'><span>Sign Up</span></div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    );
}

export default login;