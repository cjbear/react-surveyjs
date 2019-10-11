import React from 'react';

import './GoogleButton.css';


const googleButton = () => {
    return (
    <div className="">
        <span className="f6 f5-l ph2">Sign in with:</span>
        <div id="customBtn" class="customGPlusSignIn">
          <i class="icon"></i>
          <label class="buttonText">Google</label>
        </div>
      </div>
    )
};

export default googleButton;