import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from ".";

const AppRouter = () => {
  return(
    <Routes>
      {publicRoutes.map((route) => <Route path={route.path} element={<route.element />} />)}
    </Routes>
  )
}

export default AppRouter;