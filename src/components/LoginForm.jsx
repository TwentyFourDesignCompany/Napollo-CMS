import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="side__bar">
      <div className="side__bar__header"></div>
      <div className="side__bar__content">
        <form
          onSubmit={() => {
            navigate("/dashboard");
          }}
          className="side__bar__content__form"
        >
          <div className="side__bar__content__form__logo">Bulevard</div>
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
          <button className="login__btn">Login</button>
        </form>
      </div>
    </div>
  );
}
