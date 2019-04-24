/* eslint-disable import/named,class-methods-use-this,no-console */
import WebSocket from '@adonisjs/websocket-client'
import Auth from 'services/Auth'

class Socket {

  socket = WebSocket('ws://localhost:3333')

  currentTopic = null

  isConnected = false

  constructor() {
    this.socket.withJwtToken(Auth.token).connect()

    this.socket.on('open', () => {
      this.isConnected = true
    })

    this.socket.on('close', () => {
      this.isConnected = false
    })
  }

  _handleOn(name, callback) {
    return this.socket.getSubscription(this.currentTopic).on(name, (data) => {
      console.log('ON:', name, data)
      callback(data)
    })
  }

  subscribe(topic) {
    this.currentTopic = topic
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
    this.socket.emit(name, data)

    return this
  }

  close() {
    this.socket.close()
  }
}

const socket = new Socket()

export default socket
