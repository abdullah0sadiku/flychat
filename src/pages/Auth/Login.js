import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../Home/Footer";
import Header from "../Home/Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate('/');
    }
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setError(loginStatus);
      setTimeout(function () {
        localStorage.clear();
        window.location.reload();
      }, 3000);
    }
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password has left blank");
        }
        break;
      default:
    }
  }

  function loginSubmit() {
    if (user !== "" && pass !== "") {
      var url = "http://localhost/flychat/API/login.php";
      var headers = {
        "Accept": "application/json",
        "Content-type": "application/json"
      };
      var data = {
        user: user,
        pass: pass
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if (response[0].result === "Invalid username!" || response[0].result === "Invalid password!") {
            setError(response[0].result);
          } else {
            const user_id = response[0].user_id;
            const avatar = response[0].avatar;

            console.log(response[0].avatar)
            setMsg(response[0].result);
            setTimeout(function () {
              localStorage.setItem("login", true);
              localStorage.setItem('avatar', avatar)
              localStorage.setItem('id', user_id);
              localStorage.setItem('user', user);
              navigate("/");
            }, 5000);
          }
        })
        .catch(err => {
          setError(err.message);
          console.log(err);
        });
    } else {
      alert("All fields are required!");
    }
  }

  return (
    <>
      <Header />
      <div className="Login">
        <div className="LoginCard " style={{ borderRadius: '1rem' }}>
          <h5 className="" style={{ fontSize: 30 }}>Log in</h5>
          <div className="">
            <input
              type="text"
              id="username"
              className=""
              placeholder="Username"
              value={user}
              onChange={(e) => handleInputChange(e, "user")}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="pass"
              className=""
              placeholder="Password"
              value={pass}
              onChange={(e) => handleInputChange(e, "pass")}
            />
          </div>
          <div className="pt-1 mb-4">
            <button
              type="submit"
              defaultValue="Login"
              onClick={loginSubmit}
            >   Login
            </button>
          </div>
          <a className="small text-muted" href="/signup">Create an account</a>
        </div>
      </div>
      <Footer />
    </>
  )
}
