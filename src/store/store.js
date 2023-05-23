import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./services/serviceSlice";
import portfolioReducer from "./portfolio/portfolioSlice";


export default configureStore({
  reducer: {
    service: serviceReducer,
    portfolio: portfolioReducer,
  },
});
