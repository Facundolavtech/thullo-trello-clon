import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { logoutAction } from "../redux/actions/authActions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  padding: 0 25px 0 25px;

  a {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;
    form {
      margin-right: 50px;
      height: 70px;
      position: relative;
      display: flex;
      align-items: center;

      input {
        display: block;
        height: 55%;
        min-width: 350px;
        background-color: #fff;
        box-shadow: 0px 0px 4px 1px rgb(235, 235, 235);
        outline: none;
        border: none;
        padding-left: 10px;
        border-radius: 8px 0 0 8px;

        &::placeholder {
          color: #999;
        }

        &:focus {
          box-shadow: 0px 0px 5px 2px rgb(235, 235, 235);
        }
      }

      button {
        position: absolute;
        right: -5px;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;
        height: 55%;
        width: 90px;
        border-radius: 8px;
        font-size: 0.9em;
        background-color: rgb(47, 128, 237);
        color: #fff;
        font-weight: bold;
        outline: none;
        border: none;

        &:hover {
          background-color: rgb(38, 109, 201);
          transition: background-color 0.2s ease;
        }

        &:active {
          border: 2px solid rgba(240, 240, 240, 0.39);
        }
      }
    }
  }
`;

const StyledProfile = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  img {
    display: block;
    width: 35px;
    height: 35px;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid rgba(200, 200, 200, 0.2);
  }

  p {
    display: inline-block;
    margin: 0;
    margin-left: 25px;
  }

  div {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.23s ease-in;
    position: absolute;
    top: 69px;
    right: -15%;
    min-width: 220px;
    background-color: rgb(250, 250, 250);
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);

    a {
      display: flex;
      background-color: rgb(47, 128, 237);
      margin: 10px auto;
      width: 80%;
      font-size: 0.9em;
      color: #fff !important;
      height: 35px !important;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      font-weight: 500;

      &:hover {
        opacity: 0.7;
        transition: opacity 0.2s ease;
      }
    }

    a:last-of-type {
      background-color: rgb(221, 54, 54);
    }
  }

  &:hover div {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.23s ease-in;
  }

  &:hover span {
    transform: rotate(-135deg);
    transition: transform 0.2s ease;
  }

  span {
    border: solid #444;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-left: 8px;
    margin-bottom: 0px;
    transition: transform 0.2s ease;
  }
`;

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.userInfo);

  const logoutFunction = () => {
    dispatch(logoutAction());
    router.push("/login");
  };

  return (
    <>
      {userInfo ? (
        <>
          <StyledHeader>
            <Link href="/">
              <a>
                <img src="/assets/img/logo-transparent.png" />
                Thullo
              </a>
            </Link>
            <div>
              <form>
                <input type="text" placeholder="Keyword.." />
                <button type="submit">Search</button>
              </form>

              <StyledProfile>
                <img src="assets/img/profile-default.png" />
                <p>{userInfo.name}</p>
                <span></span>
                <div>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                  <Link href="/changepassword">
                    <a>Change password</a>
                  </Link>
                  <a onClick={() => logoutFunction()}>Logout</a>
                </div>
              </StyledProfile>
            </div>
          </StyledHeader>
        </>
      ) : null}
    </>
  );
};

export default Header;
