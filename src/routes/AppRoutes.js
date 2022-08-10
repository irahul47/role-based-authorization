import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<>Loading...</>}>
              <p>Page Not Found.</p>
            </Suspense>
          }
        />
        <Route
          index
          element={
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
