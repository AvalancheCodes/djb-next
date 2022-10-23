import WebApp from "../model/WebApp";
import { createContext } from "react";

const AppContext = createContext<WebApp>(null!);

export default AppContext;
