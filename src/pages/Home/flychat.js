import React from 'react';
import chatimage from './asset/Artboard 28.png';
import { useNavigate } from 'react-router-dom';
function Flychat() {
  const naviget = useNavigate();
  function navii() {
    
    const S = localStorage.getItem('login');

    if (S === "") {
      naviget("/Signup");
    }
  }
  return (
    <div className='Flychat'>
          

          <div className='part'> 
                  <div className='Qoute'>
                        Elevate your chats with FlyChat
                        <br/>
                        where every message takes off!
                        <br/>
                        Smooth, seamless, and soaring high.
                      
                        <button onClick={navii}>Start in Web</button>
                  </div>
                  <div className='btn'>
                    
                    <img src={[chatimage]} />
                    
                  </div>
          </div>

    </div>
  )
}

export default Flychat