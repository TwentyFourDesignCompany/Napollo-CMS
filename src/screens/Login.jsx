import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function Login({ setOnLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let axiosConfig = {
      headers: {
        Authorization: "Basic eW9vOjEyMzQ1Njc=",
      },
    };
    setLoader(true);
    axios
      .post(
        `http://napollo-env-1.eba-gyut3nvj.us-east-2.elasticbeanstalk.com/napollo/login?provider=napollo&platform=android`,
        {
          Username: username,
          Password: password,
        },
        axiosConfig
      )
      .then((res) => {
        setLoader(false);
        if (res.data.responseStatus === true) {
          navigation("dashboard", { replace: true });
        } else {
          alert("Invalid Login Credentials");
        }
      })
      .catch((res) => {
        console.log("errr", res);
        setLoader(false);
      });
  }

  useEffect(() => {
    setOnLogin(true);
    disableBodyScroll(document);
    return setOnLogin(false);
  }, []);
  return (
    <div className="login__container">
      {loader && <Loader />}
      <div className="login__container__content">
        <form onSubmit={handleSubmit} className="side__bar__content__form">
          <div className="side__bar__content__form__logo">Napollo</div>
          <input
            type="text"
            className="input__box"
            placeholder="Enter Username"
            required={true}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            className="input__box"
            placeholder="Enter Password"
            required={true}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="login__btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
