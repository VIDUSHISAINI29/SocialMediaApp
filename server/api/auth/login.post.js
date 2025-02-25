
import { getUserByUsername } from "~/server/database/user.js"
import {generateToken} from "~/server/utils/jwt.js"
import bcrypt from "bcrypt"
import {createRefreshToken} from "../../database/refreshToken.js"
import { userTransformer } from "~/server/transformers/user.js"
export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    const {username, password} = body
    if(!username || !password){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid Params'
        }))
    }
    
// is the user registered

const user = await getUserByUsername(username);
//  console.log("user = " , user);

if(!user){
    return sendError(event, createError({
        statusCode: 400,
        statusMessage: "invalid username or password"
    }))
}
    // compare password

const doesPasswordMatch = await bcrypt.compare(password, user.password);

if(!doesPasswordMatch){
    return sendError(event, createError({
        statusCode: 400,
        statusMessage: "invalid username or password"
    }))
}

// generate tokenToString
// access token 
// refresh token 

const {accessToken, refreshToken} = generateToken(user);
const token = await createRefreshToken({
    token : refreshToken,
    userId : user.id
})
console.log("toe  ", token);

return{
    access_token : accessToken, user: userTransformer(user)
}
})