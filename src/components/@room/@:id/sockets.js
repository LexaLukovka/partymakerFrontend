import Socket from 'services/Socket'

export default async ({ match, actions }) => {

  const room_id = match.params.id

  await Socket.subscribe(`room:${room_id}`)

  Socket.emit('join', room_id)

  Socket.on('join', (user_id) => {
    actions.room.messages.read(room_id)
    actions.users.online(user_id)
  })

  Socket.on('leave', (user_id) => {
    actions.users.offline(user_id)
  })

  Socket.on('message', actions.room.messages.receive)
}
