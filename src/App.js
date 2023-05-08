import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Portfolio from "./pages/Portfolio";
// LAYOUTS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/connect" element={<Connect />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
