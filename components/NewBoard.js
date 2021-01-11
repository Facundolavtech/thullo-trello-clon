import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledNewBoardModal = styled.div`
  width: 307px;
  height: 271px;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    background-color: rgb(47, 128, 237);
    width: 30px;
    height: 30px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    border-radius: 50%;

    &:hover {
      background-color: rgb(38, 109, 201);
      transition: background-color 0.2s ease;
    }

    &:active {
      border: 2px solid rgba(240, 240, 240, 0.39);
    }
  }

  img {
    width: 100%;
    height: 78px;
    object-fit: cover;
  }

  div:first-of-type {
    display: flex;
    justify-content: space-between;
  }
  div:last-of-type {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    align-items: center;

    button:first-of-type {
      display: flex;
      font-weight: 500;
      font-size: 10px;
      line-height: 15px;
      width: 50px;
      height: 30px;
      border: none;
      outline: none;
      color: #828282;
      align-items: center;
      justify-content: center;
      letter-spacing: -0.035em;
      background-color: #ffffff;

      &:hover {
        cursor: pointer;
        color: #646464;
      }
    }

    button:last-of-type {
      align-items: center;
      justify-content: center;
      display: flex;
      cursor: pointer;
      height: 30px;
      font-size: 10px;
      width: 76px;
      border-radius: 8px;
      background-color: rgb(47, 128, 237);
      color: #fff;
      font-weight: 500;
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

  input[type="text"] {
    height: 34px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    outline: none;
    padding-left: 10px;
    margin-bottom: 20px;
    margin-top: 15px;

    &::placeholder {
      color: #bdbdbd;
    }

    &:focus {
      box-shadow: 0px 0px 5px 2px rgb(235, 235, 235);
    }
  }

  input[type="file"],
  input[type="checkbox"] {
    display: none;
  }
`;

const StyledLabel = styled.label`
  width: 120px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  color: #828282;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    background: #e4e4e4;
    transition: background 0.2s ease;
  }
`;

const NewBoard = () => {
  return (
    <>
      <StyledNewBoardModal>
        <>
          <span>X</span>
          <img src="/assets/img/oficina.jpg" />
          <input type="text" placeholder="Add board title" />
          <div>
            <StyledLabel for="cover-upload">Cover</StyledLabel>
            <input id="cover-upload" type="file" />
            <StyledLabel for="private-switch">Private</StyledLabel>
            <input id="private-switch" type="checkbox" />
          </div>
          <div>
            <button>Cancel</button>
            <button>&#43; Create</button>
          </div>
        </>
      </StyledNewBoardModal>
    </>
  );
};

export default NewBoard;
