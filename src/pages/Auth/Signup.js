import React, { useState } from 'react'
import axios from 'axios';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [Username , Setuser] = useState('');
  const [Password , SetPass] = useState('');
  const [avatar, setAvatar] = useState(null);
  const naviget = useNavigate()

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (Username.length === 0) {
      alert('Username has been left blank');
    } else if (Password.length === 0 || Password.length < 8) {
      alert('Password must be at least 8 characters long');
    } else {
      const url = 'http://localhost/flychat/API/formsubmit.php';
      let fData = new FormData();
      fData.append('Username', Username);
      fData.append('Password', Password);
      fData.append('Avatar', avatar);
  
      axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
  
      alert("You have been registered");
      naviget('/login')
    }
  }



  return (
    <>
    <Header/>
    <div className='Login'>
        <div action="formsubmit.php" method="post" enctype="multipart/form-data" className='LoginCard'>
                   <h1>Sign up</h1>
                   <form>
                      <input type='name'  name='name' id='name' value={Username} onChange={(e) => Setuser(e.target.value)}  placeholder='Username' required/>
                      <input type='password' placeholder='Password' minLength={8} required={'@><!:)(:;.,'} name='password' id='password' value={Password} onChange={(e) => SetPass(e.target.value)} />
                      
                      <input type="file" accept="image/*" style={{width:200, alignItems:'center',}}  onChange={handleAvatarChange} />

                      <div> <button name='submit' id='submit' onClick={handleSubmit}>Signup</button> <a href='/login'>Already have an account</a></div>
                   </form>      
                    
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup