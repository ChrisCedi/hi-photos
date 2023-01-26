import { Home } from "../views/Home";
import { Error404 } from "../views/Error404";
import { User } from "../views/User";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/user",
    component: User,
    exact: true,
  },
  {
    path: "*",
    component: Error404,
  },
];

export { routes };
