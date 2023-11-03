import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #videos = new Map()

    // push - colocar o video dentro do array
    // Set - Array que não aceita valores duplicados, Map - Objeto

    list() {
       return Array.from(this.#videos.entries()).map((videoArray) => {
        const id= videoArray[0]
        const data = videoArray[1]

        return{
            id,
            ...data,
        }

       })
    }

    create(video){
        const videoId = randomUUID()

        // UUID - Univesal Unique ID

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}