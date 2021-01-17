import React, { useState, useEffect } from "react";
import register from "../sass/register.module.scss";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserAction,
  getAuthUserAction,
  clearMessageAction,
} from "../redux/actions/authActions";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const AlertError = styled.p`
  display: block;
  width: 80%;
  margin: auto;
  font-size: 16px;
  color: rgb(207, 71, 71);
  font-weight: 500;
  margin-bottom: 5px;
`;

const AlertSuccess = styled.p`
  color: rgb(97, 190, 69);
  display: block;
  width: 80%;
  margin: auto;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const registerPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const message = useSelector((state) => state.auth.message);

  const getAuthUserFunction = () => {
    dispatch(getAuthUserAction());
  };
  const clearMessageFunction = () => {
    dispatch(clearMessageAction());
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!userInfo) getAuthUserFunction();

    if (userInfo && token) {
      router.push("/");
    }
  }, [userInfo]);

  useEffect(() => {
    if (message.content === "User has succesfully created") {
      router.push("/login");
      clearMessageFunction();
    }
  }, [message]);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const { name, username, email, password } = user;

  const registerUser = (user) => {
    message.content === "User has succesfully created"
      ? null
      : dispatch(registerUserAction(user));
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
    } else if (name.trim().length > 15) {
      setError({
        msg: "Name have been maximum 15 characters",
        type: "alert-danger",
      });
    } else {
      setError(null);
      registerUser({ name, username, email, password });
      setUser({
        ...user,
        password: "",
      });
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
            <img src="./assets/img/logo-transparent.png" alt="logo" />
          </div>
          <h1>Register</h1>
          {message.type === "success" ? (
            <AlertSuccess>{message.content}</AlertSuccess>
          ) : null}
          {message.type === "error" ? (
            <AlertError>{message.content}</AlertError>
          ) : null}
          {error ? <AlertError>{error.msg}</AlertError> : null}
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
              <>
                <Button variant="primary" disabled className="submit__disabled">
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span>Loading</span>
                </Button>{" "}
              </>
            ) : (
              <>
                <button type="submit" className={register.submit__button}>
                  Register
                </button>
              </>
            )}
          </form>
          <Link href="/login">
            <a className={register.login__link}>Have an account? Sign In</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default registerPage;
