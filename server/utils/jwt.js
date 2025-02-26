import jwt from "jsonwebtoken"
import { setCookie } from "h3";

const generateAccessToken = (user) => {
    const config = useRuntimeConfig()
    return jwt.sign({userId: user.id}, config.jwtAccessSecret,{
        expiresIn: '10m'
    }
    );
}
const generateRefrestToken = (user) => {
    const config = useRuntimeConfig()
    return jwt.sign({userId: user.id}, config.jwtRefreshSecret,{
        expiresIn: '4h'
    }
    );
}

export const decodeRefreshToken = (token) => {
    const config = useRuntimeConfig();
    try {
        return jwt.verify(token, config.jwtRefreshSecret);
    } catch (error) {
        return null
    }
}

export const  generateToken =  (user) => {
    const accessToken =   generateAccessToken(user);
    const refreshToken =  generateRefrestToken(user);
    return{
        accessToken ,
        refreshToken,
    }
}

export const sendRefreshToken = (event, token) => {
    console.log("event = ",event)
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        secure: true,  // Use secure in production (HTTPS required)
        sameSite: "strict",
        path: "/",
    })
}