import prisma from "../database/index.js"
export const createRefreshToken =  (token) => {

    return prisma.refreshToken.create({
       data: token
       
    })
}