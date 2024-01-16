import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Home/Header';
import Footer from './Home/Footer';

function Explore() {
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false); // State variable for triggering refresh

  useEffect(() => {
    const user_id = localStorage.getItem('id');

    if (user_id) {
      axios
        .get(`http://localhost/flychat/API/qpost.php?user_id=${user_id}`)
        .then((response) => {
          if (response.data.success) {
            setPosts(response.data.data);
          } else {
            console.error('Failed to fetch posts:', response.data.message);
          }
        })
        .catch((error) => {
          console.error('Error fetching posts:', error.message);
        });
    }

    // Reset refresh state after handling the effect
    setRefresh(false);
  }, [refresh]); // Add refresh as a dependency

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPostImage(file);
  };

  const handleUpload = async () => {
    try {
      const user_id = localStorage.getItem('id');

      if (!user_id) {
        console.error('User ID not found in localStorage.');
        return;
      }

      const formData = new FormData();
      formData.append('postImage', postImage);
      formData.append('user_id', user_id);

      const response = await axios.post(
        'http://localhost/flychat/API/post.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        console.log('Post uploaded successfully!', response.data);
        // Set refresh to true to trigger a refresh
        setRefresh(true);
      } else {
        console.error(
          'Failed to upload post.',
          response.status,
          response.statusText,
          response.data
        );
      }
    } catch (error) {
      console.error('Error uploading post:', error);
    }
  };

  return (
    <>
      <Header />
      <div className='explore'>
        <div className='explorecon'>
          <div className='post'>
            <input type='file' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload new post</button>
          </div>
          {posts.map((post, index) => (
            <div className='post' key={index}>
              <div className='postavatar'>
                <img
                  src={`http://localhost/flychat/API/${post.appath}`}
                  alt='image'
                />
              </div>
              <div className='postinfo'>
                <h3>{post.username}</h3> <h5>{post.timestamp}</h5>{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Explore;
