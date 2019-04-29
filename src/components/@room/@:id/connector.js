import { connect } from 'react-redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import currentRoom from 'src/redux/rooms/selectors/currentRoom'
import actions from 'src/redux/action'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  user: currentUser(state),
  room: currentRoom(state),
  auth: state.auth
})

const mapDispatchToProps = dispatch => {
  return ({
    actions: {
      room: {
        load: bindActionCreators(actions.rooms.find, dispatch),
        update: bindActionCreators(actions.rooms.update, dispatch),
      },
      guests: {
        loadMany: bindActionCreators(actions.guests.list, dispatch),
      },
      message: {
        loadMany: bindActionCreators(actions.messages.list, dispatch),
        send: bindActionCreators(actions.messages.create, dispatch),
        set: bindActionCreators(actions.messages.set, dispatch),
      },
      invite: {
        load: bindActionCreators(actions.invites.load, dispatch),
        create: bindActionCreators(actions.invites.create, dispatch),
        update: bindActionCreators(actions.invites.update, dispatch),
      },
      place: {
        load: bindActionCreators(actions.places.load, dispatch),
        create: bindActionCreators(actions.places.create, dispatch),
        update: bindActionCreators(actions.places.update, dispatch),
      },
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
