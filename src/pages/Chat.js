import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSetting, AiOutlineSend } from 'react-icons/ai';
import { FaMicrophoneLines } from 'react-icons/fa6';
import { MdOutlineFileUpload } from 'react-icons/md';
import Header from './Home/Header';
import Footer from './Home/Footer';
import axios from 'axios';
import { ReactMediaRecorder } from 'react-media-recorder';

function Chat() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const fileInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [imgg, setimgg] = useState('');
  const loggedInUserId = localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost/flychat/API/fetch_user.php?loggedInUserId=${loggedInUserId}`);
        const data = response.data;
        if (data) {
          setUsers(data);
        } else {
          console.error('Failed to fetch users. Response data:', data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [loggedInUserId]);

  const fetchChatData = async () => {
    try {
      const response = await axios.get(`http://localhost/flychat/API/getchat.php?From=${loggedInUserId}&To=${selectedUser.id}`);
      const chatdata = response.data;
      console.log(chatdata);
      if (chatdata.chats) {
        const sortedMessages = chatdata.chats.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        setMessages(sortedMessages);
      }
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };

  const handleUserSelect = (user) => {
    fetchChatData();
    setSelectedUser(user);
    setMessages([]);
  };

  const handleSendmsg = async () => {
    if (msg.length === 0 && !imgg && !recordedAudio) {
      alert("Can't send empty messages");
      return;
    }

    const form = new FormData();
    form.append('Messages', msg);
    form.append('From', loggedInUserId);
    form.append('To', selectedUser.id);

    if (imgg) {
      form.append('imgg', imgg);
      setimgg('');
    }

    if (recordedAudio) {
      const audioBlob = await fetch(recordedAudio).then((response) => response.blob());
      form.append('voiceRecording', audioBlob, 'recordedAudio.mp3');
      setRecordedAudio(null);
      setIsRecording(null)
    }

    try {
      const response = await axios.post('http://localhost/flychat/API/chat.php', form);
      console.log('Server response:', response.data);

      if (response.data.chats) {
        setMessages(response.data.chats);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMsg('');
    fetchChatData();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleVoice = () => {
    setIsRecording(!isRecording);
  };

  const handleVoiceRecording = (blob) => {
    setRecordedAudio(blob);
  };

  const filteredUsers = searchQuery
    ? users.filter((user) => user.name.toLowerCase().includes(searchQuery))
    : users;

  return (
    <>
      <Header />
      <div className='Chat'>
        <div className='ChatContiner'>
          <div className='usercontact'>
            <div className='Search'>
              <input
                placeholder='Search Contact'
                type='Search'
                value={searchQuery}
                onChange={handleSearch}
              />
              <button>
                <AiOutlineSetting />
              </button>
            </div>
            <div className='Horizontal'></div>
            <div className='cont'>
              {filteredUsers.map((user, index) => (
                <div
                  key={index}
                  className='usercontactcard'
                  onClick={() => handleUserSelect(user)}
                >
                  <div className='Avatar'>
                    <img src={`${user.avatar}`} alt={user.name} />
                  </div>
                  <div>{user.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='userchat'>
          <div className='chatconv'>
            {messages.length === 0 ? (
              <div>No messages for selected user</div>
            ) : (
              <div className='msg-container'>
                {messages.map((message) => (
                  <div
                    key={message.chat_id}
                    className={`msg ${
                      message.sender_id === loggedInUserId ? 'right-msg' : 'left-msg'
                    }`}
                  >
                    {message.imgpath ? (
                      <img
                        src={`http://localhost/flychat/API/${message.imgpath}`}
                        alt='image'
                      />
                    ) : message.voicepath ? (
                      <audio controls>
                        <source
                          src={`http://localhost/flychat/API/${message.voicepath}`}
                          type='audio/wav'
                        />
                        Your browser does not support the audio element.
                      </audio>
                    ) : (
                      message.message
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

            <div className='Horizontal'></div>

            <div className='chatinputmassage'>
              <input
                placeholder='Message'
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <button onClick={() => fileInputRef.current.click()}>
                <MdOutlineFileUpload />
              </button>
              <input
                type='file'
                accept='image/*'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(e) => {
                  setimgg(e.target.files[0]);
                }}
              />
              <button onClick={handleVoice}>
                <FaMicrophoneLines />
              </button>
              {isRecording && (
                <ReactMediaRecorder
                  audio
                  onStop={handleVoiceRecording}
                  render={({ status, startRecording, stopRecording }) => (
                    <div>
                      <button onClick={startRecording} disabled={status === 'recording'}>
                        Start Recording
                      </button>
                      <button onClick={stopRecording} disabled={status !== 'recording'}>
                        Stop Recording
                      </button>
                    </div>
                  )}
                />
              )}
              <button onClick={handleSendmsg}>
                <AiOutlineSend />
              </button>
            </div>
          </div>

          <div className='userselected'>
            {selectedUser && (
              <>
                <div className='Avatar'>
                  <img
                    src={
                      selectedUser.avatar
                        ? selectedUser.avatar
                        : '//static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'
                    }
                    alt={selectedUser.name}
                  />
                </div>
                <div>{selectedUser.name}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Chat;
