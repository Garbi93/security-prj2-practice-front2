import {atom} from "recoil";
import {getCookie} from "../util/cookiUtil";

const initState = {
    email: '',
    nickname: '',
    social: false,
    accessToken: '',
    refreshToken: ''
}

const loadMemberCookie = () => {
    const memberInfo = getCookie('member');

    // 한글이 들어갈 경우 처리
    if (memberInfo && memberInfo.email) {
        memberInfo.email = decodeURIComponent(memberInfo.email)
    }

    return memberInfo;
}

export const signinState = atom({
    key: 'signinState',
    default: loadMemberCookie() || initState,
});