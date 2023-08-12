import React from 'react';
import { Link } from 'react-router-dom'; 
import './accountStyle.css';
import login from './Login'


export default function Signup() {
  const validatePasswords = () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const passwordMismatchError = document.getElementById('passwordMismatchError');
    const passwordMatchSuccess = document.getElementById('passwordMatchSuccess');
    const passwordStrengthMessage = document.getElementById('passwordStrengthMessage');

    if (password !== confirmPassword) {
      passwordMismatchError.style.display = 'block';
      passwordMatchSuccess.style.display = 'none';
    } else {
      passwordMismatchError.style.display = 'none';
      passwordMatchSuccess.style.display = 'block';
    }

    // Add password strength checking logic and update passwordStrengthMessage accordingly
  };

  return (
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            {/* ...other boxes... */}
          </div>
        </div>
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1><a href="index.html" rel="dofollow">CryptoPlay</a></h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Create account</span>
                <form id="stripe-login">
                  <div className="field padding-bottom--24">
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" required />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={validatePasswords}
                      required
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Confirm Password</label>
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      onChange={validatePasswords}
                      required
                    />
                    <div id="passwordMismatchError" style={{ color: 'red', display: 'none' }}>
                      Password does not match
                    </div>
                    <div id="passwordMatchSuccess" style={{ color: 'green', display: 'none' }}>
                      Password confirmed
                    </div>
                    <div id="passwordStrengthMessage" style={{ marginTop: '5px' }}></div>
                  </div>
                  <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" value="Continue" />
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>Already have an account? <Link to="/login">Login</Link></span>
              <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span><a href="#">© CryptoPlay</a></span>
                <span><a href="#">Contact</a></span>
                <span><a href="#">Privacy & terms</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
