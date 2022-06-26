import { io, Socket } from 'socket.io-client'

export default class SocketIO {
    private from?: number
    private to?: number
    private url: string
    private io?: Socket

    constructor() {
        this.url = 'http://localhost:3333'
    }

    joinChat(from?: number, to?: number):void {
        this.from = from
        this.to = to
        this.io = io(this.url, {
            query: {
                from: this.from,
                to: this.to
            }
        })

        this.io.on('connect', ()=> {
            console.log('Conected')
        })
    }

    sendMessage(message: String):void {
            this.io?.emit('message', {
                to: this.to,
                from: this.from,
                message
            })
    }

    receiveMessage(callback: Function) {
        this.io?.on('new-message', (message) => {
            callback(message)
        })
    }

    sendTyping(typing: boolean):void {
        this.io?.emit('typing', {
            to: this.to,
            from: this.from,
            typing 
        })
    }

    receiveTyping(callback: Function):void {
        this.io?.on('new-typing', (data) => {
            callback(data)
        })
    }
    
}