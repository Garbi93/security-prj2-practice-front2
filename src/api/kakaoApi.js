import axios from "axios";


const rest_api_key = process.env.REACT_APP_Kakao_Rest_Api_Key;
const redirect_uri = process.env.REACT_APP_Redirect_Uri;
const auth_code_path = process.env.REACT_APP_KaKao_Code_Path;

const access_token_url = process.env.REACT_APP_Kakao_Access_Token_Url;


export const getKakaoLoginLink = () => {

    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    return kakaoURL;

}

export const getAccessToken = async (authCode) => {

    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };

    const params = {
        grant_type: "authorization_code",
        client_id: rest_api_key,
        redirect_uri: redirect_uri,
        code:authCode
    }

    const res = await axios.post(access_token_url, params, header);

    const accessToken = res.data.access_token;

    return accessToken;

}

