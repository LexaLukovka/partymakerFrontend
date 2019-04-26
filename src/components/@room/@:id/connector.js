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
      loadRoom: bindActionCreators(actions.rooms.find, dispatch),
      loadMessages: bindActionCreators(actions.messages.list, dispatch),
      loadGuests: bindActionCreators(actions.guests.list, dispatch),
      loadInvite: bindActionCreators(actions.invites.load, dispatch),
      createInvite: bindActionCreators(actions.invites.create, dispatch),
      updateInvite: bindActionCreators(actions.invites.update, dispatch),
      sendMessage: bindActionCreators(actions.messages.create, dispatch),
      setMessage: bindActionCreators(actions.messages.set, dispatch),
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
