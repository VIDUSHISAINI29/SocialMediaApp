import {createUser} from "../../database/user.js"
import { sendError } from "h3";
import {userTransformer} from "../../transformers/user.js"
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {username, email, password, repeatPassword, name, profileImage} = body;
    if(!username || !email || !password || !repeatPassword || !name ){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Params"
        }))
    }
    if(password !== repeatPassword){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Password do not match!"
        }))
    }
    const userData = {
        username,
        email,
        password,
        name,
        profileImage: 'hglafdal'
    }
    const user = await createUser(userData)
    // console.log("user = ", user)
    return {
        body: user,
    }
})