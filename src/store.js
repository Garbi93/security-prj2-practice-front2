import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";

// store 는 금고 라고 생각 하고
export default configureStore({
    // reducer 에서 파트가 나뉘어 진다.
    reducer: {
        "loginSlice": loginSlice,
    }
});