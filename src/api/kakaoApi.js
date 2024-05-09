

const rest_api_key = process.env.REACT_APP_Kakao_Rest_Api_Key;
const redirect_uri = process.env.REACT_APP_Redirect_Uri;
const auth_code_path = process.env.REACT_APP_KaKao_Code_Path;

export const getKakaoLoginLink = () => {

    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    return kakaoURL;

}