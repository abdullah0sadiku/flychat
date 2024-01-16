import Home from "./pages/Home/Home";
import Chat from "./pages/Chat"
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Protected from "./pages/Auth/Protecdet";
import explore from "./pages/explore"
import test from "./pages/test";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
          <BrowserRouter>
                <Routes>
                  <Route path="/" Component={Home} />
                  <Route path="/test" Component={test} />
                  <Route path="/Chat" Component={Chat}/>
                  <Route path="/explore" Component={explore} />
                  <Route path="/Profile" element={<Protected Component={Profile} />} />
                  <Route path="/Login" Component={Login}/>
                  <Route path="/Signup" Component={Signup}/>
                </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

