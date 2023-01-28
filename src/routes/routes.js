import { Home } from "../views/Home";
import { Error404 } from "../views/Error404";
import { User } from "../views/User";
import { BaseLayout } from "../layouts/BaseLayout";

const routes = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
  },
  {
    path: "/user/:username",
    layout: BaseLayout,
    component: User,
    exact: true,
  },
  {
    path: "*",
    layout: BaseLayout,
    component: Error404,
  },
];

export { routes };
