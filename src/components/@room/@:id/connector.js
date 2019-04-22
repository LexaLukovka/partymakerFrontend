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
    loadRoomMessages: bindActionCreators(actions.messages.list, dispatch),
    loadRoomGuests: bindActionCreators(actions.users.list, dispatch),
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
