/* eslint-disable import/named,class-methods-use-this,no-console */
import WebSocket from '@adonisjs/websocket-client'
import Auth from 'services/Auth'

class Socket {

  socket = WebSocket('ws://localhost:3333')

  isConnected = false

  constructor() {
    this.socket
      .withJwtToken(Auth.token)
      .connect()
      .subscribe('chat')

    this.socket.on('open', () => {
      this.isConnected = true
    })

    this.socket.on('close', () => {
      this.isConnected = false
    })
  }

  _handleOn(name, callback) {
    return this.socket.getSubscription('chat').on(name, (data) => {
      console.log('ON:', name, data)
      callback(data)
    })
  }

  on(name, callback) {
    if (Array.isArray(name)) {
      return name.map(n => this._handleOn(n, callback))
    }

    return this._handleOn(name, callback)
  }

  emit(name, data) {
    return this.socket.emit(name, data)
  }
}

const socket = new Socket()

export default socket
