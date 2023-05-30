import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./services/serviceSlice";
import portfolioReducer from "./portfolio/portfolioSlice";
import ServiceDetailReducer from "./services/serviceDetailSlice";
import PortfolioDetailReducer from './portfolio/portfolioDetailSlice'

export default configureStore({
  reducer: {
    service: serviceReducer,
    portfolio: portfolioReducer,
    serviceDetail: ServiceDetailReducer,
    portfolioDetail:PortfolioDetailReducer
  },
});
