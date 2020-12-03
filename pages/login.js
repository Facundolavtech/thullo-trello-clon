import React, { useState } from "react";
import styled from "@emotion/styled";
import login from "../sass/login.module.scss";
import Link from "next/link";

const Alert = styled.p`
  display: block;
  width: 80%;
  margin: auto;
  font-size: 16px;
  color: rgb(207, 71, 71);
  font-weight: 500;
  margin-bottom: 5px;
`;

const loginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const ERRORS_INITIAL_STATE = {
    msg: "",
    type: "",
  };
  const [error, setError] = useState(ERRORS_INITIAL_STATE);

  const { email, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (email.trim() === "" || password.trim() === "") {
      setError({
        msg: "Complete all the fields",
        type: "alert-danger",
      });
    } else if (password.trim().length < 6) {
      setError({
        msg: "Password have been at least 6 characters",
        type: "alert-danger",
      });
    } else {
      setError(ERRORS_INITIAL_STATE);
    }

    console.log("Ingresando");
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className={login.container}>
        <div className={login.card}>
          <div className={login.img__container}>
            <img src="./assets/img/logo.png" alt="logo" />
          </div>
          <h1>Login</h1>
          {error ? <Alert className={error.type}>{error.msg}</Alert> : null}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Insert your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Insert your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
          <Link href="/forgot">
            <a className={login.forgot__link}>Forgot your password?</a>
          </Link>
          <Link href="/register">
            <a className={login.register__link}>
              Dont have an account? Sign Up
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default loginPage;
