import { useState } from "react";
import HeadLayout from "../layout/head";
import styled from "@emotion/styled";
import Header from "../components/Header";
import NewBoard from "../components/NewBoard";
import homepage from "../sass/homepage.module.scss";
import Board from "../components/Board";

const BgGray = styled.body`
  background-color: #f8f9fd;
`;

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  return (
    <>
      <HeadLayout title="App" />
      <BgGray>
        <Header />
        <div className={homepage.boards__title}>
          <h1>All Boards</h1>
          <button onClick={() => openModal()}>&#43; Add</button>
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
