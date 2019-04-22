import { connect } from 'react-redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import currentRoom from 'src/redux/rooms/selectors/currentRoom'
import actions from 'src/redux/action'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  user: currentUser(state),
  room: currentRoom(state),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    setCurrentRoom: bindActionCreators(actions.rooms.setCurrent, dispatch),
    loadRoom: bindActionCreators(actions.rooms.find, dispatch),
    loadRoomMessages: bindActionCreators(actions.rooms.messages, dispatch),
    loadRoomGuests: bindActionCreators(actions.rooms.guests, dispatch),
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
