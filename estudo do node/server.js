// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Ois')

//     return response.end()
// })

// server.listen(3333)

import {fastify} from 'fastify'
import { DatabaseMemory} from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

// Request Body - toda vez que usar post e put ele envia um corpo pra
//  requisição dados de um formulário

// GET, POST - CRIAR , PUT - ALTERAR, DELETE, PATCH - ALTERAR INFORMAÇÃO ESPECÍFICA DO RECURSO

// POST https://localhost:3333/videos
// PUT https://localhost:3333/videos/ID


// Route

server.post('/videos', (request, reply) => {
    const {title,description,duration} = request.body

    database.create({
        title,
        description,
        duration,
    })

    // reply.status retorna o status da rota - caso erro 
    return reply.status(201).send()
})

server.get('/videos', () =>{
    const videos = database.list()
    
    return videos
})

server.put('/videos/:id', (request, reply) =>{
    const videoId = request.params.id
    const {title,description,duration} = request.body

    database.update(videoId,{
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})
//