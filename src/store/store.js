import { setupListeners } from "@reduxjs/toolkit/query/react";
// import { errorLogger } from "./middlewares/errorLogger";
// import { apiLoader } from "./middlewares/apiLoader";
import personnelReducer from "./slices/personnelSlice";
import { configureStore } from "@reduxjs/toolkit";

// const middleware = [errorLogger, apiLoader];

const store = configureStore({
  reducer: {
    personnel: personnelReducer,
    // [restApi.reducerPath]: restApi.reducer,
  },
  //   middleware: (geDefaultMiddleware) =>
  //     geDefaultMiddleware({
  //       serializableCheck: false,
  //     }).concat(middleware),
});

setupListeners(store.dispatch);

export default store;
