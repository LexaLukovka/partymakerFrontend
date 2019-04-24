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

const mapDispatchToProps = dispatch => ({
  actions: {
    setCurrentRoom: bindActionCreators(actions.rooms.setCurrent, dispatch),
    loadRoom: bindActionCreators(actions.rooms.find, dispatch),
    loadRoomMessages: bindActionCreators(actions.rooms.messages, dispatch),
    loadRoomGuests: bindActionCreators(actions.rooms.guests, dispatch),
    sendMessage: bindActionCreators(actions.messages.create, dispatch),
    setMessage: bindActionCreators(actions.messages.set, dispatch),
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
