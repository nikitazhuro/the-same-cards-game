import React, { lazy } from "react";

const MenuPage = lazy(() => import("../Components/Pages/MenuPage/MenuPage"));
const PlaygroundPage = lazy(() => import("../Components/Pages/PlaygroundPage/PlaygroundPage"));


export const publicRoutes = [
  {path: '/menu', element: MenuPage},
  {path: '/play', element: PlaygroundPage},
  {path: '*', element: MenuPage}
]