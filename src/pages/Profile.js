import React from "react";
import { useNavigate  } from 'react-router-dom';
import Footer from './Home/Footer';
import Header from './Home/Header';

import { IoMdArchive } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Profile() {
       
        const naviget = useNavigate();
                function logoutSubmit(){
                    localStorage.setItem("login", "");
                    localStorage.setItem("user" , "");
                    localStorage.setItem("avatar" , "");
                    localStorage.setItem("id","")
                    localStorage.setItem("loginStatus", "Logged out successfully!")
                    naviget("/");
                }
        const user = localStorage.getItem('user');
        const avatar = localStorage.getItem('avatar')
                
        const handleUpdate = () =>{
                alert('hh')
        }
return (
    <>
    <Header/>
    <div className='Profile'>
        <div className='profilecontainer'>
        
        <>
            <div className='personal'>
                    <button className="avatar" onClick={handleUpdate} ><img src={`${avatar}`} alt="User Avatar" /></button>
                    <div className='personalcard'> {user} </div>         
                    <button className="Delete" type="submit" onClick={logoutSubmit}>Logout</button>    
            </div>
            <div className='privacy'>
                    <h1>Privacy</h1>
                    <div className='Horizontal'></div>
                    <div className='personalcard'> Email | AbdullahBaliSadiku@gmail.com</div>     
                    <div className='personalcard'> Passwprd | ********</div>     
                    <div className='personalcard'> Mobile Number | +383 48 285002</div>  

            </div>
            <div className='contactmang'>
                    <h1>Contact</h1>
                    <div className='Horizontal'></div>
                    <div className='contactcard'> Endirt | mob num   <div className='hh'><button className='Archive'><IoMdArchive /></button><button className='Delete'><MdDelete /></button></div> </div>     
                    <div className='contactcard'> Endirt | mob num   <div className='hh'><button className='Archive'><IoMdArchive /></button><button className='Delete'><MdDelete /></button></div> </div>     
                    <div className='contactcard'> Endirt | mob num   <div className='hh'><button className='Archive'><IoMdArchive /></button><button className='Delete'><MdDelete /></button></div> </div>     
                    <div className='contactcard'> Endirt | mob num   <div className='hh'><button className='Archive'><IoMdArchive /></button><button className='Delete'><MdDelete /></button></div> </div>     
            </div>
        </>
   
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Profile