// import { PrismaClient } from "@prisma/client"


// const prisma = new PrismaClient()

// async function main() {
//     await prisma.user.create({
//       data: {
//         name: 'Agilan',
//       },
//     })
  
//     const allUsers = await prisma.user.findMany({
//       include: {
//         posts: true,
//       },
//     })
//     console.dir(allUsers, { depth: null })
//   }
// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })