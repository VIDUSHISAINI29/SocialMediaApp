import jwt from "jsonwebtoken"

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

export const  generateToken =  (user) => {
    const accessToken =   generateAccessToken(user);
    const refreshToken =  generateRefrestToken(user);
    return{
        accessToken ,
        refreshToken,
    }
}