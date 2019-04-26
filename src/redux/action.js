import auth from './auth/action'
import users from 'src/redux/users/action'
import rooms from 'src/redux/rooms/action'
import places from 'src/redux/places/action'
import assets from 'src/redux/assets/action'
import messages from 'src/redux/messages/action'
import invites from 'src/redux/invites/action'
import guests from 'src/redux/guests/action'

export default {
  auth,
  users,
  rooms,
  invites,
  guests,
  places,
  assets,
  messages,
}
