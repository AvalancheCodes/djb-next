import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import { FC, ReactNode, useEffect } from "react";

interface IProps {
  children?: ReactNode;
}

const PublicLayout: FC<IProps> = ({ children }) => {
  // Set the margin of <main> to the height of the footer
  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (!main || !footer) throw new Error("main or footer are missing!");

    main.style.marginBottom = footer.offsetHeight + "px";
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
