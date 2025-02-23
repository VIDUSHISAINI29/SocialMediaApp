import {createUser} from "../../database/user.js"
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {username, email, password, repeatPassword, name} = body;
    if(!username || !email || !password || !repeatPassword || !name){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Params"
        }))
    }
    if(password !== repeatPassword){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Password do not match"
        }))
    }
    const userData = {
        username,
        email,
        password,
        name
    }
    const user = await createUser(userData)

    return {
        body: body,
    }
})