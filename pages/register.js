import React, { useState } from "react";
import register from "../sass/register.module.scss";
import styled from "@emotion/styled";
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

const registerPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const ERRORS_INITIAL_STATE = {
    msg: "",
    type: "",
  };
  const [error, setError] = useState(ERRORS_INITIAL_STATE);

  const { username, email, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setError({
        msg: "Complete all the fields",
        type: "alert-danger",
      });
    } else if (password.trim().length < 6) {
      setError({
        msg: "Password have been at least 6 characters",
        type: "alert-danger",
      });
    } else if (username.trim().length < 2 || username.trim().length > 12) {
      setError({
        msg:
          "Name have been a minimum of 2 characters and maximum of 12 characters",
        type: "alert-danger",
      });
    } else {
      setError(ERRORS_INITIAL_STATE);
    }

    console.log("Registrando usuario");
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className={register.container}>
        <div className={register.card}>
          <div className={register.img__container}>
            <img src="./assets/img/logo.png" alt="logo" />
          </div>
          <h1>Register</h1>
          {error ? <Alert className={error.type}>{error.msg}</Alert> : null}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              placeholder="Insert your name"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Insert your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="password" className="password__label">
              Password
            </label>
            <input
              type="password"
              placeholder="Insert your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </form>
          <Link href="/login">
            <a className={register.register__link}>Have an account? Sign In</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default registerPage;
