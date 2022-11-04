import React from "react";
import Link from "next/link";
import MenuRoute from "../../model/Navigation/MenuRoute";

interface IMenuRoutesProps {
  routes: Array<MenuRoute>;
}
const MenuRoutes: React.FC<IMenuRoutesProps> = ({ routes }) => {
  return (
    <ul className="nav dropdown-toggle-start-icon d-block flex-column mb-5">
      {routes.map((route, index) => (
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
  );
};

export default MenuRoutes;
