import Link from "next/link";
import { offcanvasRoutes } from "../../public/config/routes";
import { FC } from "react";

const Offcanvas: FC = () => {
  return (
    <div
      className="offcanvas offcanvas-end bg-dark"
      // tabIndex="-1"
      id="offcanvasEnd"
      aria-labelledby="offcanvasEnd"
    >
      <div className="offcanvas-header">
        <a
          className="ms-auto btn btn-primary btn-round zoom-hover"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="fas fa-times p-0"></i>
        </a>
      </div>
      <div className="offcanvas-body vh-lg-100 d-flex align-items-start flex-column px-5 px-md-6">
        <ul className="nav dropdown-toggle-start-icon d-block flex-column mb-5">
          {offcanvasRoutes.map((route, index) => (
            <li className="nav-item" key={index}>
              <Link href={route.path}>
                <a className="nav-link text-white-stroke display-6 h5">
                  {route.friendlyName}
                </a>
              </Link>
              <p className="align-self-center mt-0 mt-md-5">— {route.title}</p>
            </li>
          ))}
        </ul>
        <div className="mt-auto mb-5">
          <a
            href="components/header/offcanvas#Offcanvas.tsx"
            className="font-heading text-white text-primary-hover d-block mb-3"
          >
            hello@DavidBarel.com
          </a>
          <a
            href="components/header/offcanvas#Offcanvas.tsx"
            className="font-heading text-white text-primary-hover"
          >
            +(800)300-8690
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
