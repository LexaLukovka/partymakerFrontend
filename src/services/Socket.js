import Auth from 'services/Auth'

class Socket {

  socket = null

  isConnected = false

  constructor() {
    this.connect().catch(console.error)
  }

  connect = async () => {
    if (typeof window === 'undefined') return
    const WebSocket = await import('@adonisjs/websocket-client')
    this.ws = WebSocket.default('ws://localhost:3333').withJwtToken(Auth.token).connect()

    return new Promise((resolve, reject) => {
      this.ws.on('open', () => {
        this.isConnected = true
        resolve()
      })
      this.ws.on('error', (error) => {
        this.isConnected = false
        reject(error)
      })
    })
  }

  subscribe = async (topicName) => {
    if (!this.ws) await this.connect()

    if (this.socket?.topic !== topicName) {
      this.ws.subscribe(topicName)
      this.socket = this.ws.getSubscription(topicName)
    }

    return this
  }

  on = (name, callback) => {
    if (!this.socket) return console.warn('You not connected to Socket!')
    this.socket.on(name, (data) => {
      console.log('ON:', name, data)
      callback(data)
    })

    return this
  }

  emit = (name, data) => {
    if (!this.socket) return

    try {
      console.log('EMIT:', name, data)
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

  close = () => {
    if (!this.isConnected) return
    if (!this.ws) throw new Error('You are not connected!')
    this.ws.close()
    this.isConnected = false
    this.ws = null
  }
}

const socket = new Socket()

export default socket
