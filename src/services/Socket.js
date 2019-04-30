import WebSocket from '@adonisjs/websocket-client'
import Auth from 'services/Auth'

class Socket {

  currentTopic = null

  isConnected = false

  _connect() {
    return WebSocket('ws://localhost:3333')
  }

  constructor() {
    this.socket = this._connect()
    this.socket.withJwtToken(Auth.token).connect()

    this.socket.on('open', () => {
      this.isConnected = true
    })

    this.socket.on('close', () => {
      this.isConnected = false
    })
  }

  _handleOn(name, callback) {
    const subscription = this.socket && this.socket.getSubscription(this.currentTopic)

    if (!subscription) return

    subscription.on(name, (data) => {
      console.log('ON:', name, data)
      callback(data)
    })
  }

  subscribe(topic) {
    this.currentTopic = topic

    if (!this.socket) {
      this.socket = this._connect()
    }

    this.socket.subscribe(topic)

    return this
  }

  on(name, callback) {
    if (Array.isArray(name)) {
      return name.map(n => this._handleOn(n, callback))
    }

    this._handleOn(name, callback)

    return this
  }

  emit(name, data) {
    if (this.socket) this.socket.emit(name, data)

    return this
  }

  close() {
    try {
      if (this.socket) this.socket.close()
      this.socket = null
    } catch (e) {
      this.socket = null
    }
  }
}

const socket = new Socket()

export default socket
