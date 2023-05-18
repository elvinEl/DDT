import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./components/portfolio/PortfolioDetails";
import ServicesDetails from "./components/services/ServicesDetails";

// LAYOUTS
import RootLayout from "./layouts/RootLayout";
import PortfolioLayout from "./layouts/PortfolioLayout";
import ServicesLayout from "./layouts/ServicesLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<ServicesLayout />}>
        <Route path=":slug" element={<ServicesDetails />} />
      </Route>
      <Route path="portfolio" element={<PortfolioLayout />}>
        <Route index element={<Portfolio />} />
        <Route path=":slug" element={<PortfolioDetails />} />
      </Route>
      <Route path="connect" element={<Connect />} />
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
