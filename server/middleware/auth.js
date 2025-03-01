import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt.js"
import { getUserById } from "../database/user.js"
import jwt from "jsonwebtoken"
import { sendError } from "h3"
export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user'
    ]
    const isHandledByThisMiddleware = endpoints.some(endopoint => {
        const pattern = new UrlPattern(endopoint)
        return pattern.match(event.req.url)
    })
    if(!isHandledByThisMiddleware){
        return
    }
    const token = event.req.headers.authorization?.split(' ')[1]
console.log("token = ", token)
    const decoded = decodeAccessToken(token)
console.log('decodec = ',decoded)
    if(!decoded){
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }
    try {
        const userId = decoded.userId
        const user = await getUserById(userId)
        event.context.auth = {user}
    } catch (error) {
        console.log('error in middleware auth.js',error);
        
    }
})