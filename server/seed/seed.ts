 import { Prisma } from '../generated/prisma-client/'

 const db = new Prisma({
		endpoint: process.env.PRISMA_API,
		secret: process.env.PRISMA_SECRET,
 })
 const setup = async () => {
	await db.createUser({
		email: 'mihaitaivli@gmail.com',
		name: 'Mihaita Ivli',
	})

	await db.createEvent({
		atendees: {set: ['me', 'myself', 'I']},
	})
 }

 setup()
