import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ title = "Book best hotels for your vacation", children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <ToastContainer position="bottom-right" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
