 import { Prisma, UserNode, EventNode } from '../generated/prisma-client/'

 const db = new Prisma({
   endpoint: process.env.PRISMA_API,
   secret: process.env.PRISMA_SECRET
 })
 const setup = async () => {
  const user1: UserNode = await db.createUser({
    name: 'Mihaita Ivli',
    email: 'mihaitaivli@gmail.com'
  })
  console.log('u1', user1)

  const event1: EventNode = await db.createEvent({
    atendees: {"set": ['me', 'myself', 'I']}
  })
  console.log('e1', event1)
 }

 setup()