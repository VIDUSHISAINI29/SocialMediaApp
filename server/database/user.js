import prisma  from "./index.js"

export const createUser = async (userData) => {
  console.log("user in user.js = ", userData);
  try {
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};