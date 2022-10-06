import '../styles/globals.scss'
import PublicLayout from "./layouts/public-layout";
import Preloader from "../components/preloader";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <PublicLayout>
      <Preloader />
      <Component {...pageProps} />
  </PublicLayout>)
}

export default MyApp
