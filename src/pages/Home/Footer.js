import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='Footer'>
            <div className='logo'>flyChat</div>
            <div class="vertical-line"></div>
            <div className='Email'>
                    <h3>Email | Abdullahbalisadiku@gmail.com</h3>
                    <h3>Email | flyChat@gmail.com</h3>
            </div>
            <div class="vertical-line"></div>
            <div className='Media'>
                    <h3 className='icons' ><FaInstagram />      </h3>
                    <h3 className='icons' ><FaLinkedin />       </h3>
                    <h3 className='icons' ><FaWhatsappSquare /> </h3>
            </div>
            <div class="vertical-line"></div>
            <div className='Mobile'>
                    <h3>mobile| +383 48 285002</h3>
                    <p>&copy; 2024 flychat. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer