import { FC, useEffect } from "react";
import Offcanvas from "./Offcanvas";
import TopNav from "./TopNav";

const Header: FC = () => {
  // Close offcanvas when clicking outside of it or when pressing
  // the nav-link button in the Header component
  useEffect(() => {
    const offcanvasOpener = document.querySelector(
      "[data-bs-toggle='offcanvas']"
    );
    const offcanvasCloser = document.querySelector(
      "[data-bs-dismiss='offcanvas']"
    );
    const offcanvas = document.querySelector("#offcanvasEnd");
    const navLinks = document.querySelectorAll(".nav-link");
    console.log(navLinks);
    if (!offcanvas || !offcanvasOpener || !offcanvasCloser)
      throw new Error("Something is undefined!");

    //add event listener to each nav-link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        offcanvas.classList.remove("show");
      });
    });

    offcanvasOpener.addEventListener("mouseover", () =>
      offcanvas.classList.add("show")
    );
    offcanvasCloser.addEventListener("click", () =>
      offcanvas.classList.remove("show")
    );
  }, []);

  return (
    <>
      <header className="navbar-light header-static navbar-sticky">
        <TopNav />
      </header>
      <Offcanvas />
    </>
  );
};

export default Header;
