import { sendError, getCookie } from "h3";
import { decodeRefreshToken } from "../../utils/jwt.js";
import { getRefreshTokenByToken } from "~/server/database/refreshToken.js";

export default defineEventHandler(async (event) => {
    // console.log("eventy = ", event);
    
    const refreshToken = getCookie(event, "refresh_token"); // Get specific cookie
    console.log("refresh_token", refreshToken);
    
    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh token is invalid refresh Token"
        }));
    }

    const rToken = await getRefreshTokenByToken(refreshToken);

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh token is invalid rtoken"
        }));
    }

    const token = decodeRefreshToken(refreshToken);
    return {
        hello: token
    };
});
