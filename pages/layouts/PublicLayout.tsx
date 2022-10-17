import React from "react";
import Header from "../../components/header/header";
import Preloader from "../../components/preloader";
import Footer from "../../components/footer/footer";

const PublicLayout = ({ children }) => {
  // Set the margin of <main> to the height of the footer
  React.useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
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
