import React from 'react'
import teaching from './asset/Artboard 26.png';
function About() {
  return (
    <div className='About'>
          <div><img src={teaching}/></div>
            
          <div>
            <h2>     
                        FlyChat: Born 01/01/2024 by BootCamp9.
                        <br/>
                        Powered by React in front-end,
                        <br/>
                        pure PHP + MYSQL in back-end.
                        <br/>
                        Elevate your messaging experience now!
            </h2>
          </div>     
    </div>

  )
}

export default About