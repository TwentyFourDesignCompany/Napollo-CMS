import React, { useEffect } from "react";
import loginbg from "../assets/loginbg.jpg";
import LoginForm from "../Components/LoginForm";

export default function Login({ setOnLogin }) {
  useEffect(() => {
    setOnLogin(true);
  }, []);
  return (
    <div className="login__container">
      <div className="login__container__content">
        <form
          onSubmit={() => {
            navigate("/dashboard");
          }}
          className="side__bar__content__form"
        >
          <div className="side__bar__content__form__logo">Napollo</div>
          <input
            type="email"
            className="input__box"
            placeholder="Enter Email"
            required={true}
          />
          <input
            type="password"
            className="input__box"
            placeholder="Enter Password"
            required={true}
          />
          <button type="submit" className="login__btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
