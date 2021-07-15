import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import "../assets/css/index.css";
export default function _app(props) {
  const { Component, pageProps } = props;
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <title>Next.js</title>
      </Head>
      <Nav />
      <div className="index-content"></div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
