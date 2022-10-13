import '../styles/globals.scss'
import PublicLayout from "./layouts/public-layout";
import Preloader from "../components/preloader";
import React, {useEffect} from "react";

function MyApp({ Component, pageProps }) {
   // Get environment variables from .env.local file inside
    // get static props
  return (
    <PublicLayout>
      <Preloader />
      <Component {...pageProps} />
  </PublicLayout>)
}

export default MyApp
