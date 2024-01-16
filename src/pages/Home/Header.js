import React, { useState, useEffect } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const naviget = useNavigate();

  function handleProfile(){
      if(status == "true"){
        naviget('/profile')
      }else{
      alert('you have to log in first')
      naviget('/login')
      }
  }
  const user = localStorage.getItem('user')
  const status = localStorage.getItem('login')

  function chat(){
        if(status == "true"){
                naviget('/chat')
        }else{
          alert('you have to log in first')
          naviget('/login')
        }
  }

  function explore(){
        if(status == "true"){
          naviget('/explore')
        }else{
          alert('you have to log in first')
          naviget('/login')
        }
  }
  return (
    <>
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className='logo'>flyChat</div>

                <ul>
                  <li><a href="/" ><h2>Home</h2></a></li>
                  <li><a href="" onClick={chat} ><h2>chat</h2></a></li>
                  <li><a href="" onClick={explore} ><h2>explore</h2></a></li>
                  <li><a href="#" ><h2>Web</h2></a></li>
                  <li className='Useroutline' ><a href={[]}  onClick={handleProfile} > <h2><AiOutlineUser  />{status === "Logged out successfully!" ? "" : (status === true && user)}</h2></a></li>
                </ul>
          </header>
    </>
  )
}

export default Header
