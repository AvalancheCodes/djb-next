import React from "react";
import { useRouter } from "next/router";
import MenuRoute from "../../model/Navigation/MenuRoute";
import AppContext from "../../context/AppContext";

interface IMenuRoutesProps {
  routes: Array<MenuRoute>;
}
const MenuRoutes: React.FC<IMenuRoutesProps> = ({ routes }) => {
  const router = useRouter();
  const appContext = React.useContext(AppContext);

  const onMenuClick = (event: any): void => {
    event.preventDefault();
    const route = event.target.getAttribute("data-nav");
    router.push(route).then(() => {
      appContext?.toggleOffCanvas();
      console.log(route);
    });
  };

  return (
    <ul className="nav dropdown-toggle-start-icon d-block flex-column mb-5">
      {routes.map((route, index) => (
        <li className="nav-item" key={index}>
          <a
            className="nav-link text-white-stroke display-6 h5"
            data-nav={route.path}
            onClick={onMenuClick}
          >
            {route.friendlyName}
          </a>
          <p className="align-self-center mt-0 mt-md-5">— {route.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default MenuRoutes;
