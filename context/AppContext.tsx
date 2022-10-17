import React, { useContext } from "react";
import WebApp from "../model/WebApp";

const AppContext = React.createContext<WebApp | null>(null);

export default AppContext;
