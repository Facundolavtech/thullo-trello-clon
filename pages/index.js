import HeadLayout from "../layout/head";
import styled from "@emotion/styled";
import homepage from "../sass/homepage.module.scss";
import { useState } from "react";
import Header from "../components/Header";

const BgGray = styled.body`
  background-color: #f8f9fd;
`;

const Home = () => {
  return (
    <>
      <HeadLayout title="App" />
      <BgGray>
        <Header />

        <div className={homepage.boards__container}>
          <h1>All Boards</h1>
          <button>&#43; Add</button>
        </div>
      </BgGray>
    </>
  );
};

export default Home;
