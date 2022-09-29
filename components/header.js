import React from 'react';
import Offcanvas from "./offcanvas";
import TopNav from "./topnav";

const Header = () => {

    // Close offcanvas when clicking outside of it or when pressing
    // the nav-link button in the Header component
    React.useEffect(() => {
        const offcanvasOpener = document.querySelector('[data-bs-toggle="offcanvas"]');
        const offcanvasCloser = document.querySelector('[data-bs-dismiss="offcanvas"]');
        const offcanvas = document.querySelector('#offcanvasEnd');

        offcanvasOpener.addEventListener('click', () => offcanvas.classList.add('show'));
        offcanvasCloser.addEventListener('click', () => offcanvas.classList.remove('show'));
    } , []);

    return (
     <>
        <header className="navbar-light header-static navbar-sticky">
            <TopNav/>
        </header>
        <Offcanvas />
     </>
    );
};

export default Header;