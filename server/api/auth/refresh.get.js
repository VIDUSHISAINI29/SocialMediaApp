import { sendError, getCookie } from "h3";
import { decodeRefreshToken, generateToken } from "../../utils/jwt.js";
import { getRefreshTokenByToken } from "~/server/database/refreshToken.js";
import {getUserById} from "../../database/user.js"
export default defineEventHandler(async (event) => {
    // console.log("eventy = ", event);
    
    const refreshToken =  getCookie(event, "refresh_token"); // Get specific cookie
    console.log("refresh_token", refreshToken);
    
    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh token is invalid refresh Token"
        }));
    }

    const rToken = await getRefreshTokenByToken(refreshToken);
console.log("rToken = ", rToken);

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh token is invalid rtoken"
        }));
    }

    const token = decodeRefreshToken(refreshToken);
    try {
        console.log('token inside refresh.get.js', token.userId)
        const user = await getUserById(token.userId);
        console.log('user inside refresh.get.js', user)
        const {accessToken} = generateToken(user)
        return{
            access_token : accessToken
        }
    } catch (error) {
        console.log(error);
        
    }
    return {
        hello: token
    };
});
