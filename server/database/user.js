import prisma  from "./index.js"
import Prisma from "@prisma/client"
import  bcrypt from "bcrypt"


export const createUser = (userData) => {
  const finalUserData = {
      ...userData,
      password: bcrypt.hashSync(userData.password, 10)
  }

  return prisma.user.create({
      data: finalUserData
  })
}

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username
    }
  })
}


export const getUserById = (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId
    }
  })
}
// export const createUser = async (userData) => {
//   const finalUserData = {
//     ...userData,
//     password: bcrypt.hashSync(userData.password, 10)
//   }
//   try {
//     return await prisma.user.create({ data: finalUserData });
//   } catch (error) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       if (error.code === "P2002") {
//         console.error("Duplicate entry:", error.meta.target);
//         throw new Error("User already exists");
//       }
//     }
//     throw error;
//   }
// };
