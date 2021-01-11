import React from "react";
import styled from "@emotion/styled";

const StyledBoardContainer = styled.div`
  /* min-width: 243px; */
  width: 243px;
  margin: auto;
  height: 255px;
  min-height: 255px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  margin-bottom: 30px;

  &:hover p {
    text-decoration: underline;
  }
  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.2s ease;
  }

  &:active {
    border: 2px solid rgb(235, 235, 235);
    transition: border 0.1s ease;
  }

  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 12px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  div {
    width: 100%;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

const Board = () => {
  return (
    <StyledBoardContainer>
      <img src="assets/img/oficina.jpg" />
      <p>Devchallenges Board</p>
      <div>
        <img src="assets/img/profile-img.jpg" />
      </div>
    </StyledBoardContainer>
  );
};

export default Board;
