import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NAPOLLO_API from "../APIs/API";

export default function Login({ setOnLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const _LoginUser = async () => {
    try {
      const payload = {
        Usernamr: username,
        Password: password,
      };
      const res = await NAPOLLO_API.loginUser(payload);
      console.log(res);
    } catch (error) {
      console.log("error", error.toString());
    }
  };
  console.log(username);
  //   useLayoutEffect(() => {
  //     if (window.localStorage.getItem("user") != null) {
  //       navigate("/dashboard");
  //     }
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    _LoginUser();
  };
  useEffect(() => {
    setOnLogin(true);
  }, []);
  return (
    <div className="login__container">
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
