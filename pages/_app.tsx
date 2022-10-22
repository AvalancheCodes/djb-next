import "../styles/globals.scss";
import PublicLayout from "./layouts/PublicLayout";
import Preloader from "../components/preloader";
import React, { useContext, useEffect, useState } from "react";
import WebApp from "../model/WebApp";
import AppContext from "../context/AppContext";
import ShopProvider from "../context/shop/ShopProvider";

function MyApp({ Component, pageProps }) {
  const appContext = useContext(AppContext);
  const [webApp, setWebApp] = useState<WebApp | null>(null);

  useEffect(() => {
    if (!appContext) {
      setWebApp(new WebApp(process.env.NEXT_PUBLIC_APP_DOMAIN));
    }
  }, []);
  return (
    <AppContext.Provider value={webApp}>
      <ShopProvider>
        <PublicLayout>
          <Preloader />
          <Component {...pageProps} />
        </PublicLayout>
      </ShopProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
