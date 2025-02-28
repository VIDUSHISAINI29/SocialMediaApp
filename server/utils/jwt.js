import jwt from "jsonwebtoken"
import { setCookie } from "h3";
// import useRuntimeConfig from "../../nuxt.config.ts"

const generateAccessToken = (user) => {
    const config = useRuntimeConfig();
    const payload = { userId: user.id };
    
    console.log("Payload before signing:", payload); // Debugging step

    return jwt.sign(payload, config.jwtAccessSecret, {
        algorithm: "HS256",  // Explicitly set signing algorithm
        expiresIn: "1h",
    });
};

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
export const decodeAccessToken = (token) => {
    console.log('token inside docde = ', token)
    const config = useRuntimeConfig();
    try {
        return jwt.verify(token, config.jwtAccessSecret);

    } catch (error) {
        console.log(error.message);
        
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