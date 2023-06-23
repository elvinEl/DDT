import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./services/serviceSlice";
import portfolioReducer from "./portfolio/portfolioSlice";
import serviceDetailReducer from "./services/serviceDetailSlice";
import portfolioDetailReducer from "./portfolio/portfolioDetailSlice";
import partnersReducer from "./partners/partnersSlice";
import contactReducer from "./contact/contactSlice";
import aboutReducer from "./about/aboutSlice";
import featureReducer from "./feature/featureSlice";

export default configureStore({
  reducer: {
    service: serviceReducer,
    portfolio: portfolioReducer,
    serviceDetail: serviceDetailReducer,
    portfolioDetail: portfolioDetailReducer,
    partners: partnersReducer,
    contact: contactReducer,
    about: aboutReducer,
    feature: featureReducer,
  },
});
