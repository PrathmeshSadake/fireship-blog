import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./Footer";

const Layout = ({ title = "Book best hotels for your vacation", children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
