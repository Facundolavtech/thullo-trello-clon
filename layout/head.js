import React from "react";
import Head from "next/head";

const HeadLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Thullo - Trello clon</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" type="image/png" href="./assets/img/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
};

export default HeadLayout;
