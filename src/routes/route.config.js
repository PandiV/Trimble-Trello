import { lazy } from "react";

const Login = lazy(() => import("containers/Login"));

const Dashboard = lazy(() => import("layouts/Dashboard"));

export default [
  {
    name: "login",
    path: "/login",
    component: Login,
    exact: true,
    authentication: false,
  },
  {
    name: "dashboard",
    path: "/home",
    component: Dashboard,
    exact: false,
    authentication: true,
  },
  {
    name: "default",
    path: ["/", "/index.html"],
    default: true,
  },
];
