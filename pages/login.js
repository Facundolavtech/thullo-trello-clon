import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import login from "../sass/login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, getAuthUserAction } from "../redux/actions/authActions";

const AlertError = styled.p`
  display: block;
  width: 100%;
  margin: auto;
  font-size: 16px;
  color: rgb(207, 71, 71);
  font-weight: 500;
  margin-bottom: 5px;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const AlertSuccess = styled.p`
  color: rgb(97, 190, 69);
  display: block;
  width: 100%;
  margin: auto;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const loginPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const message = useSelector((state) => state.auth.message);

  const getAuthUserFunction = () => {
    dispatch(getAuthUserAction());
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!userInfo) getAuthUserFunction();

    if (userInfo && token) {
      router.push("/");
    }
  }, [userInfo]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const [error, setError] = useState(null);

  const loginUser = (user) => {
    dispatch(loginAction(user));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (email.trim() === "" || password.trim() === "") {
      setError({
        msg: "Complete all the fields",
      });
    } else if (password.trim().length < 6) {
      setError({
        msg: "Password have been at least 6 characters",
      });
    } else {
      setError(null);
      loginUser({ email, password });
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
      <div className={login.container}>
        <div className={login.card}>
          <div className={login.img__container}>
            <img src="./assets/img/logo-transparent.png" alt="logo" />
          </div>
          <h1>Login</h1>
          {message.type === "success" ? (
            <AlertSuccess>{message.content}</AlertSuccess>
          ) : null}
          {message.type === "error" ? (
            <AlertError>{message.content}</AlertError>
          ) : null}
          {error ? (
            <AlertError className={error.type}>{error.msg}</AlertError>
          ) : null}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit" className={login.submit__button}>
              Login
            </button>
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
