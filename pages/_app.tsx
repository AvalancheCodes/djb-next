import "../styles/globals.scss";
import PublicLayout from "../layouts/PublicLayout";
import Preloader from "../components/preloader";
import { FC, useContext, useEffect, useState } from "react";
import WebApp from "../model/WebApp";
import AppContext from "../context/AppContext";
import ShopProvider from "../context/shop/ShopProvider";

interface IProps {
  Component: any;
  pageProps: any;
}

const MyApp: FC<IProps> = ({ Component, pageProps }) => {
  const appContext = useContext(AppContext);
  const [webApp, setWebApp] = useState<WebApp | null>(null);

  useEffect(() => {
    setWebApp(new WebApp(process.env.NEXT_PUBLIC_APP_DOMAIN!));
  }, []);

  return (
    <>
      {webApp && (
        <AppContext.Provider value={webApp}>
          <ShopProvider>
            <PublicLayout>
              <Preloader />
              <Component {...pageProps} />
            </PublicLayout>
          </ShopProvider>
        </AppContext.Provider>
      )}
    </>
  );
};

export default MyApp;
