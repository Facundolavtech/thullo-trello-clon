import { useState } from "react";
import HeadLayout from "../layout/head";
import styled from "@emotion/styled";
import Header from "../components/Header";
import NewBoard from "../components/NewBoard";
import homepage from "../sass/homepage.module.scss";
import Board from "../components/Board";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalAction,
} from "../redux/actions/modalActions";

const BgGray = styled.body`
  background-color: #f8f9fd;
`;

const Home = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.open);

  const openModalFunction = () => {
    dispatch(openModalAction());
  };
  
  return (
    <>
      <HeadLayout title="App" />
      <BgGray>
        <Header />
        <div className={homepage.boards__title}>
          <h1>All Boards</h1>
          <button onClick={() => openModalFunction()}>&#43; Add</button>
        </div>
        <div className={homepage.boards}>
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
        {modalIsOpen ? <NewBoard /> : null}
      </BgGray>
    </>
  );
};

export default Home;
