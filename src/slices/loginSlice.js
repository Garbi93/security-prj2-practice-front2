import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginPost} from "../api/memberApi";
import {getCookie, removeCookie, setCookie} from "../util/cookiUtil";


const initState = {
    email: ''
};

const loadMemberCookie = () => {

    const memberInfo = getCookie('member');

    return memberInfo;
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => loginPost(param));


const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadMemberCookie() || initState,
    reducers: {
        login: (state, action) => {
            console.log("login..........");

            setCookie("member", JSON.stringify(action.payload), 1);

            return action.payload;
        },
        logout: () => {
            console.log("logout.........")

            removeCookie('member'); // 로그아웃 시 쿠키 삭제

            return {...initState};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled")

            const payload = action.payload;

            if (!payload.error) {
                // 쿠키에 로그인 정보 JSON 타입으로 저장 하기
                setCookie("member", JSON.stringify(payload), 1);
            }

            return payload;

        }).addCase(loginPostAsync.pending, (state, action) => {
            console.log("pending")
        }).addCase(loginPostAsync.rejected, (state, action) => {
            console.log("rejected")
        });
    }
})

export const {login, logout} = loginSlice.actions;

export default loginSlice.reducer;