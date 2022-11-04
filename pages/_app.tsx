import "../styles/globals.scss";
import PublicLayout from "../layouts/PublicLayout";
import Preloader from "../components/preloader";
import { FC, useState } from "react";
import WebApp from "../model/WebApp";
import ShopProvider from "../context/shop/ShopProvider";
import AppContextProvider from "@/context/AppContextProvider";

interface IProps {
  Component: any;
  pageProps: any;
}

const MyApp: FC<IProps> = ({ Component, pageProps }) => {
  const [webApp, setWebApp] = useState<WebApp | null>(null);

  return (
    <AppContextProvider>
      <ShopProvider>
        <PublicLayout>
          <Preloader />
          <Component {...pageProps} />
        </PublicLayout>
      </ShopProvider>
    </AppContextProvider>
  );
};

export default MyApp;
