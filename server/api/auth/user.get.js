// import { userTransformer } from "~~/server/transformers/user"

import { userTransformer } from "~/server/transformers/user.js"

export default defineEventHandler(async (event) => {

   return{
    user: userTransformer(event.context.auth?.user) 
   }

})