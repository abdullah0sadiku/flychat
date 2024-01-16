import React from 'react'
import Speed from './asset/rush.png'
import Secure from './asset/secure-shield.png'
import Storage from './asset/hosting.png'
function Feature() {

  
  return (
    <div className='Feature'>
      
        <div className='Card'>
              <img src={Speed}/>
              <h1>Speed
              <h3>Global chats <br/>lightning-fast</h3>
              </h1>
              
        </div>
        
        <div className='Card'>
              <img src={Secure}/>
              <h1>Security
                <h3>Conversations won't harm you.
                </h3>
              </h1>
              
        </div>
        
        <div className='Card'>
              <img src={Storage}/>
              <h1>Storage 
                <h3>Limitless file uploads
                  audio, video, docs
                  and more
                </h3>
              </h1>
              
        </div>
 
    </div>
  )
}

export default Feature