import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar user="" username={true} />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
