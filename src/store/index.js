import { configureStore } from "@reduxjs/toolkit";
import courseListSlice from "./courseListSlice";
import dashboardSlice from "./dashboardSlice";

const store = configureStore({
    reducer:{
        courses : courseListSlice.reducer ,
        dashboard : dashboardSlice.reducer,
    }
})

export default store;