import React, { useState, useEffect } from "react";
import register from "../sass/register.module.scss";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserAction,
  getAuthUserAction,
} from "../redux/actions/authActions";
import { Button } from "antd";

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
  const router = useRouter();

  const getAuthUserFunction = () => {
    dispatch(getAuthUserAction());
  };

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    const token = localStorage.getItem("token");

    getAuthUserFunction();

    if (userInfo && token) {
      router.push("/");
    }
  }, [userInfo]);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const { name, username, email, password } = user;

  const registerUser = (user) => {
    dispatch(registerUserAction(user));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (
      name.trim() === "" ||
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
      setError(null);
      registerUser({ name, username, email, password });
    }
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
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="password" className="password__label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {loading ? (
              <Button type="primary" loading></Button>
            ) : (
              <button type="submit">Register</button>
            )}
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
