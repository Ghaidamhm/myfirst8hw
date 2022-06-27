import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		// add your code here
		return 'ghaida hw8 done';
	});

	server.get('/Homework', async (request, reply) => {
		// add your code here
		return 'ghaida hw8 done';
	});
}