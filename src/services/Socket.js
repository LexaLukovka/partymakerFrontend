import WebSocket from '@adonisjs/websocket-client'
import Auth from 'services/Auth'

class Socket {

  socket = null

  isConnected = false

  connect() {
    this.ws = WebSocket('ws://localhost:3333').withJwtToken(Auth.token).connect()

    return new Promise((resolve, reject) => {
      this.ws.on('open', () => {
        this.isConnected = true
        resolve()
      })
      this.ws.on('error', reject)
    })
  }

  constructor() {
    this.connect()
  }

  subscribe(topicName) {
    if (!this.ws) this.connect()

    if (this.socket?.topic !== topicName) {
      this.ws.subscribe(topicName)
      this.socket = this.ws.getSubscription(topicName)
    }

    return this
  }

  on(name, callback) {
    if (!this.socket) throw new Error('You are not connected to any topic!')

    this.socket.on(name, (data) => {
      console.log('ON:', name, data)
      callback(data)
    })

    return this
  }

  emit(name, data) {
    if (!this.socket) throw new Error('You are not connected to any topic!')

    try {
      this.socket.emit(name, data)
    } catch (e) {
      setTimeout(() => {
        try {
          this.socket.emit(name, data)
        } catch (e) {
          location.reload()
        }
      }, 4000)
    }

    return this
  }

  close() {
    if (!this.isConnected) return
    if (!this.ws) throw new Error('You are not connected!')
    this.ws.close()
    this.ws = null
  }
}

const socket = new Socket()

export default socket
