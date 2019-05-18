import Socket from 'services/Socket'

export default async ({ match, actions }) => {

  const room_id = match.params.id

  await Socket.subscribe(`room:${room_id}`)

  Socket.emit('join', room_id)

  Socket.on('join', (user_id) => {
    actions.rooms.messages.read(room_id)
    actions.users.online(user_id)
  })

  Socket.on('leave', (user_id) => {
    actions.users.offline(user_id)
  })

  Socket.on('guest:joined', (user) => {
    actions.rooms.guests.joined(room_id, user)
  })

  Socket.on('guest:left', (user) => {
    actions.rooms.guests.left(room_id, user)
  })

  Socket.on('message', actions.rooms.messages.receive)
}
